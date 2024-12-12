import { Request, Response } from "express";

import { T } from "../libs/types/common";
const memberController: T = {};

memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error , go Home", err);
  }
};
memberController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error , getLogin", err);
  }
};
memberController.getSiginup = (req: Request, res: Response) => {
  try {
    res.send("Sigin up Page");
  } catch (err) {
    console.log("Error , getSiginup", err);
  }
};

export default memberController;
