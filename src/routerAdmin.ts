import express, { Request, Response } from "express";
import adminController from "./controllers/admin.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";
const routerAdmin = express.Router();

/**  Restaurant    **/
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
  adminController.verifyRestaurant,
  productController.getAllProducts
);
routerAdmin.post(
  "/product/create",
  adminController.verifyRestaurant,
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct
);
routerAdmin.post(
  "/product/:id",
  adminController.verifyRestaurant,
  productController.updateChoosenProduct
);

/**  User    **/

routerAdmin.get(
  "/user/all",
  adminController.verifyRestaurant,
  adminController.getUsers
);
routerAdmin.post(
  "/user/edit",
  adminController.verifyRestaurant,
  adminController.updateChoosenUser
);

routerAdmin.get(
  "/main",
  adminController.verifyRestaurant,
  adminController.getMain
);

export default routerAdmin;
