import express from "express";
import bodyParser from "body-parser";
import gpsModel from "../models/gpsModel";



const router = express.Router();
router.use(bodyParser.json());

router.post("/gps", gpsModel)



export default router;