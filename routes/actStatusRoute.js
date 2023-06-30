import express from "express";
import bodyParser from "body-parser";
import activateAccount from "../controllers/AcntStatus.js"



const router = express.Router();
router.use(bodyParser.json());

router.patch("/active", activateAccount);

export default router; 