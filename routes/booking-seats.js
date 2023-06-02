import express from "express";
import bodyParser from "body-parser";
import {
  createBooking,
  deleteBooking,
  changeBooking,
} from "../controllers/booking-seat.js";

import cookieParser from "cookie-parser";

const router = express.Router();
router.use(bodyParser.json());
router.use(cookieParser());

router.post("/create", createBooking);
router.patch("/change", changeBooking);
router.delete("/delete", deleteBooking);

//

export default router;
