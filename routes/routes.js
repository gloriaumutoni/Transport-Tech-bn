import express from "express";
import bodyParser from "body-parser";
import {
  createRoute,
  deleteRoute,
  changeRoute,
} from "../controllers/routes.js";

import cookieParser from "cookie-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());

router.post("/create", createRoute);
router.patch("/change", changeRoute);
router.delete("/delete", deleteRoute);

//

export default router;
