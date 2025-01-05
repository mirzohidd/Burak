import { Product, ProductInput, ProductUpdateInput } from "libs/types/product";
import ProductModel from "../schema/Product.model";
import Errors, { HttpCode, Message } from "../libs/Error";
import { shapeIntoMongooseObjectId } from "../libs/config";
class ProductService {
  private readonly productModel;
  constructor() {
    this.productModel = ProductModel;
  }
  /**   SPA  **/
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
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel.findOneAndUpdate({ _id: id }, input, { new: true }).exec();

    if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

    return result;
  }
  public async getAllProducts(): Promise<Product[]> {
    // string = ObjectId
   
    const result = await this.productModel.find().exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }
}

export default ProductService;
