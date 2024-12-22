import { MemberType } from "../libs/enums/member.enum";
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "libs/types/member";

const restaurantController: T = {};
const memberService = new MemberService();

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("gohome");

    res.render("home");
  } catch (err) {
    console.log("Error , go Home", err);
  }
};
restaurantController.getSiginup = (req: Request, res: Response) => {
  try {
    res.render("siginup");
  } catch (err) {
    console.log("Error , getSiginup", err);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (err) {
    console.log("Error , getLogin", err);
  }
};

restaurantController.processSiginup = async (req: Request, res: Response) => {
  try {
    console.log("proccesLogun");

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    // TODO SESSIONS
    const result = await memberService.processSignup(newMember);

    console.log("body:", req.body);
    res.send(result);
  } catch (err) {
    console.log("Error , getSiginup", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("proccesLogun");
    console.log("body:", req.body);
    const input: LoginInput = req.body,
      result = await memberService.processLogin(input);
    // TODO SESSIONS
    res.send(result);
  } catch (err) {
    console.log("Error , getSiginup", err);
    res.send(err);
  }
};

export default restaurantController;
