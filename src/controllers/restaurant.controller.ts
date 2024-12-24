import { MemberType } from "../libs/enums/member.enum";
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "libs/types/member";
import Errors, { Message } from "../libs/Error";

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
    res.redirect("/admin");
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (err) {
    console.log("Error , getLogin", err);
    res.redirect("/admin");
  }
};

restaurantController.processSiginup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("proccesLogun");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    // TODO SESSIONS
    const result = await memberService.processSignup(newMember);
  } catch (err) {
    console.log("Error , getSiginup", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}");window.location.replace('admin/signup')</script>`
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("proccesLogun");
    console.log("body:", req.body);
    const input: LoginInput = req.body,
      result = await memberService.processLogin(input);
    // TODO SESSIONS
    req.session.member = result;

    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error , getSiginup", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}");window.location.replace('admin/login')</script>`
    );
    res.send(err);
  }
};
restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error , getSiginup", err);
    res.redirect("/admin");
  }
};
restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session?.member)
      res.send(`<script>alert("${req.session.member.memberNick}")</script>`);
    else res.send(`<script>alert("${Message.NOT_AUTHENTICATED}")</script>`);
  } catch (err) {
    console.log("Error , getSiginup", err);
    res.send(err);
  }
};

export default restaurantController;
