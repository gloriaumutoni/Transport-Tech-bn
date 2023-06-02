// routes/messageRoutes.js

import { Router } from "express";
const router = Router();
import {
  createMessage,
  readAllMessages,
} from "../controllers/messageController.js";

router.post("/create", createMessage);
router.get("/readAll", readAllMessages);

export default router;
