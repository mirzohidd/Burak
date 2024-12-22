import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors from "../libs/Error";

// React

const memberController: T = {};
const memberService = new MemberService();
memberController.siginup = async (req: Request, res: Response) => {
  try {
    console.log("proccesLogun");

    const input: MemberInput = req.body,
      result: Member = await memberService.siginup(input);
    // TODO TOKENS
    console.log("body:", req.body);
    res.json({ member: result });
  } catch (err) {
    console.log("Error , siginup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({err});
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    // TODO TOKENS
    
    res.json({ member: result });
  } catch (err) {
    console.log("Error , siginup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
    // res.json({err});
  }
};

export default memberController;
