import { Request, Response } from "express";
import prisma from "../lib/prisma";

/**
 * GET /api/teachers
 */
export async function getTeachers(req: Request, res: Response): Promise<void> {
  try {
    const { search } = req.query;

    const where: any = {};
    if (search) {
      where.user = {
        name: { contains: search as string, mode: "insensitive" },
      };
    }

    const teachers = await prisma.teacher.findMany({
      where,
      include: {
        user: { select: { id: true, name: true, email: true, role: true } },
        classes: true,
      },
    });

    res.json({ teachers });
  } catch (error) {
    console.error("getTeachers error:", error);
    res.status(500).json({ error: "Failed to fetch teachers." });
  }
}

/**
 * GET /api/teachers/:id
 */
export async function getTeacher(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const teacher = await prisma.teacher.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, name: true, email: true, role: true, createdAt: true } },
        classes: {
          include: {
            students: {
              include: {
                user: { select: { name: true } },
              },
            },
          },
        },
      },
    });

    if (!teacher) {
      res.status(404).json({ error: "Teacher not found." });
      return;
    }

    res.json({ teacher });
  } catch (error) {
    console.error("getTeacher error:", error);
    res.status(500).json({ error: "Failed to fetch teacher." });
  }
}

/**
 * PUT /api/teachers/:id
 */
export async function updateTeacher(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const { subjectSpecialty, name, email } = req.body;

    const teacher = await prisma.teacher.update({
      where: { id },
      data: {
        ...(subjectSpecialty && { subjectSpecialty }),
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
        classes: true,
      },
    });

    res.json({ teacher });
  } catch (error) {
    console.error("updateTeacher error:", error);
    res.status(500).json({ error: "Failed to update teacher." });
  }
}

/**
 * DELETE /api/teachers/:id
 */
export async function deleteTeacher(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const teacher = await prisma.teacher.findUnique({ where: { id } });

    if (!teacher) {
      res.status(404).json({ error: "Teacher not found." });
      return;
    }

    await prisma.user.delete({ where: { id: teacher.userId } });
    res.json({ message: "Teacher deleted successfully." });
  } catch (error) {
    console.error("deleteTeacher error:", error);
    res.status(500).json({ error: "Failed to delete teacher." });
  }
}
