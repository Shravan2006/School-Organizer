import { Request, Response } from "express";
import prisma from "../lib/prisma";

/**
 * GET /api/classes
 */
export async function getClasses(req: Request, res: Response): Promise<void> {
  try {
    const classes = await prisma.class.findMany({
      include: {
        teacher: {
          include: {
            user: { select: { name: true, email: true } },
          },
        },
        _count: {
          select: { students: true },
        },
      },
      orderBy: { name: "asc" },
    });

    res.json({ classes });
  } catch (error) {
    console.error("getClasses error:", error);
    res.status(500).json({ error: "Failed to fetch classes." });
  }
}

/**
 * GET /api/classes/:id
 */
export async function getClass(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const classData = await prisma.class.findUnique({
      where: { id },
      include: {
        teacher: {
          include: {
            user: { select: { name: true, email: true } },
          },
        },
        students: {
          include: {
            user: { select: { id: true, name: true, email: true } },
          },
          orderBy: { rollNo: "asc" },
        },
        assignments: { orderBy: { dueDate: "desc" } },
        exams: { orderBy: { date: "desc" } },
      },
    });

    if (!classData) {
      res.status(404).json({ error: "Class not found." });
      return;
    }

    res.json({ class: classData });
  } catch (error) {
    console.error("getClass error:", error);
    res.status(500).json({ error: "Failed to fetch class." });
  }
}

/**
 * POST /api/classes
 */
export async function createClass(req: Request, res: Response): Promise<void> {
  try {
    const { name, section, teacherId } = req.body;

    if (!name || !section || !teacherId) {
      res.status(400).json({ error: "name, section, and teacherId are required." });
      return;
    }

    const classData = await prisma.class.create({
      data: {
        name,
        section,
        teacherId: parseInt(teacherId),
      },
      include: {
        teacher: {
          include: {
            user: { select: { name: true } },
          },
        },
      },
    });

    res.status(201).json({ class: classData });
  } catch (error) {
    console.error("createClass error:", error);
    res.status(500).json({ error: "Failed to create class." });
  }
}

/**
 * PUT /api/classes/:id
 */
export async function updateClass(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    const { name, section, teacherId } = req.body;

    const classData = await prisma.class.update({
      where: { id },
      data: {
        ...(name && { name }),
        ...(section && { section }),
        ...(teacherId && { teacherId: parseInt(teacherId) }),
      },
      include: {
        teacher: {
          include: {
            user: { select: { name: true } },
          },
        },
      },
    });

    res.json({ class: classData });
  } catch (error) {
    console.error("updateClass error:", error);
    res.status(500).json({ error: "Failed to update class." });
  }
}

/**
 * DELETE /api/classes/:id
 */
export async function deleteClass(req: Request, res: Response): Promise<void> {
  try {
    const id = parseInt(req.params.id);
    await prisma.class.delete({ where: { id } });
    res.json({ message: "Class deleted successfully." });
  } catch (error) {
    console.error("deleteClass error:", error);
    res.status(500).json({ error: "Failed to delete class." });
  }
}
