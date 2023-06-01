import express from "express";
import bodyParser from "body-parser";
import { assignRole, getAllRoles } from "../controllers/role-assignment.js";

const router = express.Router();
router.use(bodyParser.json());

router.patch("/assign", assignRole);
router.get("/get", getAllRoles);
export default router;
