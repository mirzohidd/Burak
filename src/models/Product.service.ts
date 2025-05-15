import { T } from "../libs/types/common";
import {
  Product,
  ProductInput,
  ProductUpdateInput,
  ProductInquiry,
  ProductInquiryAdmin,
} from "../libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { HttpCode, Message } from "../libs/Error";
import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import { ObjectId } from "mongoose";
import ViewService from "./View.service";
import { ViewInput } from "../libs/types/view";
import { ViewGroup } from "../libs/enums/view.enum";
class ProductService {
  private readonly productModel;
  public viewService;
  constructor() {
    this.productModel = ProductModel;
    this.viewService = new ViewService();
  }
  // SPA
  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    const match: T = { productStatus: ProductStatus.AVAILABLE };

    if (inquiry.productType) match.productType = inquiry.productType;

    if (inquiry.search)
      match.productName = { $regex: new RegExp(inquiry.search, "i") };

    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };
    const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
        { $limit: inquiry.limit * 1 },
      ])
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result as unknown as Product[];
  }
  public async getProduct(
    memberId: ObjectId | null,
    id: string
  ): Promise<Product> {
    const productId = shapeIntoMongooseObjectId(id);
    let result = await this.productModel
      .findOne({ _id: productId, productStatus: ProductStatus.AVAILABLE })
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    // TODO: If authenticated users => first => view log creation
    if (memberId) {
      //  Check Existence
      const input: ViewInput = {
        memberId: memberId,
        viewRefId: productId,
        viewGroup: ViewGroup.PRODUCT,
      };
      const existView = await this.viewService.checkViewExistence(input);

      console.log("exist:", existView);
      if (!existView) {
        // Insert View
        await this.viewService.insertMemberView(input);

        // Increase Counts
        result = await this.productModel
          .findByIdAndUpdate(
            productId,
            { $inc: { productView: +1 } },
            { new: true }
          )
          .exec();
        console.log("Product after update:", result);
      }
    }
    return result;
  }
  /**   SSR  **/
  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.error("Error,model:crea teNewProduct", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
  public async updateChoosenProduct(
    id: string,
    input: ProductUpdateInput
  ): Promise<Product> {
    // string = ObjectId

    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
  }
  public async getAllProducts(
    inquiry: ProductInquiryAdmin
  ): Promise<{ products: Product[]; totalPages: number }> {
    const match: any = {};
    if (inquiry.productType) match.productType = inquiry.productType;
    if (inquiry.productStatus) match.productStatus = inquiry.productStatus;
    if (inquiry.search)
      match.productName = { $regex: new RegExp(inquiry.search, "i") };

    const totalCount = await this.productModel.countDocuments(match);

    const result = await this.productModel.aggregate([
      { $match: match },
      { $sort: { createdAt: 1 } },
      { $skip: (inquiry.page - 1) * inquiry.limit },
      { $limit: inquiry.limit },
    ]);

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    const totalPages = Math.ceil(totalCount / inquiry.limit);

    return { products: result, totalPages };
  }
  public async getChoosenProduct(id: string): Promise<Product> {
    const result = await this.productModel.findOne({ _id: id }).exec();

    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.NO_DATA_FOUND);

    return result;
  }
}

export default ProductService;
