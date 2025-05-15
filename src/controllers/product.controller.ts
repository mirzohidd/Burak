import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductInput, ProductInquiry } from "../libs/types/product";
import { ProductType } from "../libs/enums/product.enum";

const productService = new ProductService();

const productController: T = {};

/**   SPA  **/
productController.getProducts = async (req: AdminRequest, res: Response) => {
  try {
    console.log("getProducts");

    const { page, limit, order, productType, search } = req.query;
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    if (productType) inquiry.productType = productType as ProductType;
    if (search) inquiry.search = search as string;

    const result = await productService.getProducts(inquiry);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProduct");
    const { id } = req.params;

    const memberId = req.member?._id ?? null,
      result = await productService.getProduct(memberId, id);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

/**   SSR  **/

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    const inquiry = {
      page: parseInt(req.query.page as string) || 1,
      limit: parseInt(req.query.limit as string) || 3,
      productType: req.query.productType as any,
      productStatus: req.query.productStatus as any,
      search: (req.query.search as string) || "",
    };

    console.log("getAllProducts");
    const data = await productService.getAllProducts(inquiry);

    res.render("products", {
      products: data.products,
      page: inquiry.page,
      totalPages: data.totalPages || 1,
      type: inquiry.productType || "",
      status: inquiry.productStatus || "",
      search: inquiry.search || "",
    });
  } catch (err) {
    console.log("Error , getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.getChoosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("getChoosenProduct");
    const { id } = req.params;

    const result = await productService.getChoosenProduct(id);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, getChoosenProduct:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct");

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path.replace(/\\/g, "/");
    });

    await productService.createNewProduct(data);
    res.send(
      `<script>alert("Succesful creation");window.location.replace('/admin/product/all')</script>`
    );
  } catch (err) {
    console.log("Error , createNewProduct", err);
    const message = err instanceof Errors ? err.message : Message.CREATE_FAILED;
    res.send(
      `<script>alert("${message}");window.location.replace('/admin/product/all')</script>`
    );
  }
};

productController.updateChoosenProduct = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("updateChoosenProduct");
    const id = req.params.id;

    const result = await productService.updateChoosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error , updateChoosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({err});
  }
};

export default productController;
