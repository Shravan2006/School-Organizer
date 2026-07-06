import { Request, Response } from "express";
import prisma from "../lib/prisma";

/**
 * GET /api/attendance
 * Query by classId, studentId, date range.
 */
export async function getAttendance(req: Request, res: Response): Promise<void> {
  try {
    const { classId, studentId, from, to, page = "1", limit = "50" } = req.query;

    const where: any = {};
    if (classId) where.classId = parseInt(classId as string);
    if (studentId) where.studentId = parseInt(studentId as string);
    if (from || to) {
      where.date = {};
      if (from) where.date.gte = new Date(from as string);
      if (to) where.date.lte = new Date(to as string);
    }

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
    const take = parseInt(limit as string);

    const [records, total] = await Promise.all([
      prisma.attendance.findMany({
        where,
        skip,
        take,
        include: {
          student: {
            include: {
              user: { select: { name: true } },
            },
          },
          class: { select: { name: true, section: true } },
        },
        orderBy: { date: "desc" },
      }),
      prisma.attendance.count({ where }),
    ]);

    res.json({ records, total, page: parseInt(page as string), limit: parseInt(limit as string) });
  } catch (error) {
    console.error("getAttendance error:", error);
    res.status(500).json({ error: "Failed to fetch attendance records." });
  }
}

/**
 * POST /api/attendance/bulk
 * Mark attendance for multiple students at once.
 * Body: { classId, date, records: [{ studentId, status }] }
 */
export async function markBulkAttendance(req: Request, res: Response): Promise<void> {
  try {
    const { classId, date, records } = req.body;

    if (!classId || !date || !records || !Array.isArray(records)) {
      res.status(400).json({ error: "classId, date, and records array are required." });
      return;
    }

    const attendanceData = records.map((r: { studentId: number; status: string }) => ({
      studentId: r.studentId,
      classId: parseInt(classId),
      date: new Date(date),
      status: r.status as any,
    }));

    const result = await prisma.attendance.createMany({
      data: attendanceData,
      skipDuplicates: true,
    });

    res.status(201).json({ created: result.count });
  } catch (error) {
    console.error("markBulkAttendance error:", error);
    res.status(500).json({ error: "Failed to mark attendance." });
  }
}

/**
 * PUT /api/attendance/:id
 */
export async function updateAttendance(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const { status } = req.body;

    const record = await prisma.attendance.update({
      where: { id },
      data: { status },
    });

    res.json({ record });
  } catch (error) {
    console.error("updateAttendance error:", error);
    res.status(500).json({ error: "Failed to update attendance." });
  }
}

/**
 * GET /api/attendance/stats
 * Get attendance statistics.
 */
export async function getAttendanceStats(req: Request, res: Response): Promise<void> {
  try {
    const { classId } = req.query;

    const where: any = {};
    if (classId) where.classId = parseInt(classId as string);

    const total = await prisma.attendance.count({ where });
    const present = await prisma.attendance.count({ where: { ...where, status: "present" } });
    const absent = await prisma.attendance.count({ where: { ...where, status: "absent" } });
    const late = await prisma.attendance.count({ where: { ...where, status: "late" } });
    const excused = await prisma.attendance.count({ where: { ...where, status: "excused" } });

    const rate = total > 0 ? ((present + late) / total * 100).toFixed(1) : "0.0";

    res.json({ total, present, absent, late, excused, attendanceRate: parseFloat(rate) });
  } catch (error) {
    console.error("getAttendanceStats error:", error);
    res.status(500).json({ error: "Failed to fetch attendance stats." });
  }
}
