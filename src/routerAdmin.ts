import express, { Request, Response } from "express";
import restaurantController from "./controllers/restaurant.controller";
const routerAdmin = express.Router();

routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSiginup)
  .post("/signup", restaurantController.processSiginup);

routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

export default routerAdmin;
