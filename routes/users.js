import express from "express";

import login from "../controllers/login.js"
import signup from "../controllers/signup.js"

import bodyParser from "body-parser";
import cookieParser from "cookie-parser"

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser())


router.post("/signup", signup)

router.post("/login",login)

export default router;


