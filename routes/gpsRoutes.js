import express from "express";
import bodyParser from "body-parser";

import gpsModel from "../models/gpsModel.js";
import GPS from "../controllers/gpsController.js";


const router = express.Router();
router.use(bodyParser.json());


router.post("/gps", gpsModel)
router.post("/create", GPS);

export default router;

