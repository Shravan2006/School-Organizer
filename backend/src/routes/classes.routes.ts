import { Router } from "express";
import { getClasses, getClass, createClass, updateClass, deleteClass } from "../controllers/classes.controller";
import { authenticate, requireRole } from "../middleware/auth";

const router = Router();

router.use(authenticate);

router.get("/", getClasses);
router.get("/:id", getClass);
router.post("/", requireRole("admin"), createClass);
router.put("/:id", requireRole("admin"), updateClass);
router.delete("/:id", requireRole("admin"), deleteClass);

export default router;
