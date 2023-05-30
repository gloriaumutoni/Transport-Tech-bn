import express from "express";
import bodyParser from "body-parser";
import {assignRoute} from "../controllers/route-assignment.js";
  
  


const router = express.Router();
router.use(bodyParser.json());

router.patch("/assign", assignRoute);


export default router;