// routes/messageRoutes.js

import { Router } from "express";
const router = Router();
import {
  createMessage,
  readAllMessages,
} from "../controllers/messageController.js";

router.post("/", createMessage);
router.get("/readAll", readAllMessages);

export default router;
