import bodyParser from "body-parser";
import express from "express";
import createUser from "../controllers/usercontro.js";
import login from "../controllers/login.js";
import signup from "../controllers/signup.js";
import cookieParser from "cookie-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());

router.post("/signup", signup);
router.post("/login", login);

router.post("/user", createUser);

export default router;
