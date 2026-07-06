import { Router } from "express";
import { getTeachers, getTeacher, updateTeacher, deleteTeacher } from "../controllers/teachers.controller";
import { authenticate, requireRole } from "../middleware/auth";

const router = Router();

router.use(authenticate);

router.get("/", getTeachers);
router.get("/:id", getTeacher);
router.put("/:id", requireRole("admin"), updateTeacher);
router.delete("/:id", requireRole("admin"), deleteTeacher);

export default router;
