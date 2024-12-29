import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { AdminRequest } from "../libs/types/member";
import { ProductInput } from "../libs/types/product";

const productService = new ProductService();

const productController: T = {};

/**   SPA  **/

/**   SSR  **/
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");

    res.render("products");
  } catch (err) {
    console.log("Error , getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({err});
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
      `<script>alert("Succesful creation");window.location.replace('admin/product/all')</script>`
    );
  } catch (err) {
    console.log("Error , createNewProduct", err);
    const message = err instanceof Errors ? err.message : Message.CREATE_FAILED;
    res.send(
      `<script>alert("${message}");window.location.replace('admin/product/all')</script>`
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
    res.status(HttpCode.OK).json({data:result});
  } catch (err) {
    console.log("Error , updateChoosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({err});
  }
};

export default productController;
