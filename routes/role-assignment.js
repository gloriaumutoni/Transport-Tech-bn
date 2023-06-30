import express from "express";
import bodyParser from "body-parser";
import {
  assignRole,
  getAllUsers,
  getAllRoles,
  getByEmail,
} from "../controllers/role-assignment.js";

const router = express.Router();
router.use(bodyParser.json());

router.patch("/assign", assignRole);
router.get("/readAll", getAllRoles);
router.get("/readAllUsers", getAllUsers);
router.get("/read", getByEmail);

export default router;
