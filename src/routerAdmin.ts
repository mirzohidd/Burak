import express, { Request, Response } from "express";
import adminController from "./controllers/admin.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
const routerAdmin = express.Router();

/**  Store    **/
routerAdmin.get("/", adminController.goHome);

routerAdmin
  .get("/login", adminController.getLogin)
  .post("/login", adminController.processLogin);

routerAdmin
  .get("/signup", adminController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    adminController.processSignup
  );

routerAdmin.get("/logout", adminController.logout);
routerAdmin.get("/check-me", adminController.checkAuthSession);

/**  Product    **/
routerAdmin.get(
  "/product/all",
  adminController.verifyStore,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  adminController.verifyStore,
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct
);
routerAdmin
  .get("/product/:id",adminController.verifyStore, productController.getChoosenProduct)
  .post(
    "/product/:id",
    adminController.verifyStore,
    productController.updateChoosenProduct
  );

routerAdmin.post(
  "/product/delete/:id",
  adminController.verifyStore,
  productController.deleteChoosenProduct
);

/**  User    **/

routerAdmin.get(
  "/user/all",
  adminController.verifyStore,
  adminController.getUsers
);
routerAdmin.post(
  "/user/edit",
  adminController.verifyStore,
  adminController.updateChoosenUser
);

routerAdmin.get("/main", adminController.verifyStore, adminController.getMain);

export default routerAdmin;
