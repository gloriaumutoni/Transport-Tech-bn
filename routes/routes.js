import express from "express";
import bodyParser from "body-parser";
import {
  createRoute,
  readRoute,
  deleteRoute,
} from "../controllers/routes.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/create", createRoute);
router.get("/read", readRoute);
router.delete("/login", deleteRoute);

export default router;