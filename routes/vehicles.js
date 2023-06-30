import express from "express";
import bodyParser from "body-parser";
import {
  createVehicle,
  deleteVehicle,
  changeVehicle,
} from "../controllers/vehicle.js";

import cookieParser from "cookie-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());

router.post("/create", createVehicle);
router.patch("/change", changeVehicle);
router.delete("/delete", deleteVehicle);

export default router;
