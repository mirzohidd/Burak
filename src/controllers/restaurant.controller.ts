import { Request, Response } from "express";

import { T } from "../libs/types/common";
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error , go Home", err);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error , getLogin", err);
  }
};
restaurantController.getSiginup = (req: Request, res: Response) => {
  try {
    res.send("Sigin up Page");
  } catch (err) {
    console.log("Error , getSiginup", err);
  }
};

export default restaurantController;