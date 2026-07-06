import { Router } from "express";
import { getStudents, getStudent, updateStudent, deleteStudent } from "../controllers/students.controller";
import { authenticate, requireRole } from "../middleware/auth";

const router = Router();

router.use(authenticate);

router.get("/", getStudents);
router.get("/:id", getStudent);
router.put("/:id", requireRole("admin", "teacher"), updateStudent);
router.delete("/:id", requireRole("admin"), deleteStudent);

export default router;
