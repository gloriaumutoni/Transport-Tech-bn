import express from "express";
import bodyParser from "body-parser";
import {
  createAddress,
  getAllAddress,
  getRecentGps,
} from "../controllers/geolocation.js";

import cookieParser from "cookie-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());

router.post("/create", createAddress);
router.get("/read", getAllAddress);
router.get("/read/coord", getRecentGps);

//

export default router;
