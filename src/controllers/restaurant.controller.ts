import { MemberType } from "../libs/enums/member.enum";
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("gohome");

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

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("proccesLogun");
    res.send("DONE");
  } catch (err) {
    console.log("Error , getSiginup", err);
  }
};

restaurantController.processSiginup = async (req: Request, res: Response) => {
  try {
    console.log("proccesLogun");
    const newMember = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    const memberService = new MemberService();
    await memberService.processSignup(newMember);
    console.log("body:", req.body);
    res.send("DONE");
  } catch (err) {
    console.log("Error , getSiginup", err);
  }
};

export default restaurantController;
