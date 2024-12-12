import express, { Request, Response } from "express";
import memberController from "./controllers/member.controller";
const router = express.Router();

router.get("/", memberController.goHome);

router.get("/login", memberController.getLogin);

router.get("/signup", memberController.getSiginup);

export default router;
