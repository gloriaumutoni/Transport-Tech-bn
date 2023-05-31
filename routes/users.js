import bodyParser from "body-parser";
import express from "express";
import createUser from "../controllers/usercontro";

const router = express.Router();
router.use(bodyParser.json());

router.post("/user", createUser);

export default router