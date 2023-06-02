import express from "express";
import bodyParser from "body-parser";
import GPS from "../controllers/gpsController.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/create", GPS);

export default router;
