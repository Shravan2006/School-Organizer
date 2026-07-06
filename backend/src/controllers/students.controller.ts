import { Request, Response } from "express";
import prisma from "../lib/prisma";

/**
 * GET /api/students
 */
export async function getStudents(req: Request, res: Response): Promise<void> {
  try {
    const { classId, search, page = "1", limit = "20" } = req.query;

    const where: any = {};
    if (classId) where.classId = parseInt(classId as string);
    if (search) {
      where.user = {
        name: { contains: search as string, mode: "insensitive" },
      };
    }

    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
    const take = parseInt(limit as string);

    const [students, total] = await Promise.all([
      prisma.student.findMany({
        where,
        skip,
        take,
        include: {
          user: { select: { id: true, name: true, email: true, role: true } },
          class: true,
        },
        orderBy: { rollNo: "asc" },
      }),
      prisma.student.count({ where }),
    ]);

    res.json({ students, total, page: parseInt(page as string), limit: parseInt(limit as string) });
  } catch (error) {
    console.error("getStudents error:", error);
    res.status(500).json({ error: "Failed to fetch students." });
  }
}

/**
 * GET /api/students/:id
 */
export async function getStudent(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const student = await prisma.student.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true, role: true, createdAt: true } },
        class: true,
        attendance: { orderBy: { date: "desc" }, take: 30 },
        grades: { include: { exam: true } },
        payments: { include: { fee: true } },
        bookLoans: { include: { book: true } },
      },
    });

    if (!student) {
      res.status(404).json({ error: "Student not found." });
      return;
    }

    res.json({ student });
  } catch (error) {
    console.error("getStudent error:", error);
    res.status(500).json({ error: "Failed to fetch student." });
  }
}

/**
 * PUT /api/students/:id
 */
export async function updateStudent(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const { section, rollNo, dob, classId, name, email } = req.body;

    const student = await prisma.student.update({
      where: { id },
      data: {
        ...(section && { section }),
        ...(rollNo && { rollNo: parseInt(rollNo) }),
        ...(dob && { dob: new Date(dob) }),
        ...(classId && { classId: parseInt(classId) }),
        ...(name || email
          ? {
              user: {
                update: {
                  ...(name && { name }),
                  ...(email && { email }),
                },
              },
            }
          : {}),
      },
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
        class: true,
      },
    });

    res.json({ student });
  } catch (error) {
    console.error("updateStudent error:", error);
    res.status(500).json({ error: "Failed to update student." });
  }
}

/**
 * DELETE /api/students/:id
 */
export async function deleteStudent(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const student = await prisma.student.findUnique({ where: { id } });

    if (!student) {
      res.status(404).json({ error: "Student not found." });
      return;
    }

    // Delete user (cascades to student)
    await prisma.user.delete({ where: { id: student.userId } });

    res.json({ message: "Student deleted successfully." });
  } catch (error) {
    console.error("deleteStudent error:", error);
    res.status(500).json({ error: "Failed to delete student." });
  }
}
