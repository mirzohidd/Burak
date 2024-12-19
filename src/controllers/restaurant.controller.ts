import { MemberType } from "../libs/enums/member.enum";
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput } from "libs/types/member";

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

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("proccesLogun");
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    const memberService = new MemberService();
    const result = await memberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.log("Error , getSiginup", err);
    res.send(err)
  }
};

restaurantController.processSiginup = async (req: Request, res: Response) => {
  try {
    console.log("proccesLogun");

    const newMember = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    console.log("body:", req.body);
    res.send(result);
  } catch (err) {
    console.log("Error , getSiginup", err);
    res.send(err);
  }
};

export default restaurantController;
