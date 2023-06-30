import express from "express";
import bodyParser from "body-parser";
import {
  createBooking,
  deleteBooking,
  changeBooking,
  showAllBooked,
} from "../controllers/booking-seat.js";

import cookieParser from "cookie-parser";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());

router.post("/create",verifyToken, createBooking);
router.patch("/change/:id",verifyToken, changeBooking);
router.delete("/delete/:id",verifyToken, deleteBooking);
router.get("/readAll",verifyToken,showAllBooked)
//

export default router;
