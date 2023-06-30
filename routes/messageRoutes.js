// routes/messageRoutes.js

import middlemessage from "../middlewares/driver.js";

import { Router } from "express";
const router = Router();
import {
  createMessage,
  readAllMessages,
} from "../controllers/messageController.js";


router.post("/",createMessage);
router.get("/readAll",middlemessage, readAllMessages);


export default router;
