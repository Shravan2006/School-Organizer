import { Router } from "express";
import { getAttendance, markBulkAttendance, updateAttendance, getAttendanceStats } from "../controllers/attendance.controller";
import { authenticate, requireRole } from "../middleware/auth";

const router = Router();

router.use(authenticate);

router.get("/", getAttendance);
router.get("/stats", getAttendanceStats);
router.post("/bulk", requireRole("admin", "teacher"), markBulkAttendance);
router.put("/:id", requireRole("admin", "teacher"), updateAttendance);

export default router;
