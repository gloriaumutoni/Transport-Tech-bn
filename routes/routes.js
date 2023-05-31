import express from "express";
import bodyParser from "body-parser";
import { createRoute } from "../controllers/routes.js";

const router = express.Router();
// router.use(bodyParser.json());

router.post("/create", createRoute);
// router.patch("/read", changeRoute);
// router.delete("/login", deleteRoute);

export default router;
