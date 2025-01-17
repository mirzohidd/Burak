import { MemberType } from "../libs/enums/member.enum";
import { Request, Response, NextFunction, json } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Error";

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
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
  } catch (err) {
    console.log("Error , getSignup", err);
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

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("proccesSignup");
    const file = req.file;
    

    if (!file)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

    const newMember: MemberInput = req.body;
    newMember.memberImage = file?.path.replace(/\\/g, "/");
    newMember.memberType = MemberType.RESTAURANT;
    // TODO SESSIONS
    const result = await memberService.processSignup(newMember);
    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error , getSignup", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}");window.location.replace('/admin/signup')</script>`
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("proccesLogin");

    // throw new Error("FORCED QUICK STOP")

    const input: LoginInput = req.body,
      result = await memberService.processLogin(input);
    // TODO SESSIONS
    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error , proccesLogin", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}");window.location.replace('/admin/login')</script>`
    );
    
  }
};
restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error , logout", err);
    res.redirect("/admin");
  }
};
restaurantController.getUsers = async (req: Request, res: Response) => {
  try {
    console.log("getUsers");
    const result = await memberService.getUsers();
    
    
    res.render("users", { user: result });
  } catch (err) {
    console.log("Error , getUsers", err);
    res.redirect("/admin");
  }
};
restaurantController.updateChoosenUser = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("updateChoosenUser");
    const result = await memberService.updateChoosenUser(req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error , signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
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
    console.log("Error , getSignup", err);
    res.send(err);
  }
};

restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script>alert("${message}");window.location.replace('/admin/login')</script>`
    );
  }
};

export default restaurantController;
