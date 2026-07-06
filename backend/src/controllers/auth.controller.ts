import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import prisma from "../lib/prisma";
import { signToken, JwtPayload } from "../middleware/auth";
import { UserRole } from "@prisma/client";

const SALT_ROUNDS = 10;

/**
 * POST /api/auth/register
 * Register a new user with a role-specific profile.
 */
export async function register(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, password, role, ...profileData } = req.body;

    // Validate required fields
    if (!name || !email || !password || !role) {
      res.status(400).json({ error: "name, email, password, and role are required." });
      return;
    }

    // Check valid role
    const validRoles: UserRole[] = ["student", "teacher", "parent", "staff", "admin"];
    if (!validRoles.includes(role)) {
      res.status(400).json({ error: `Invalid role. Must be one of: ${validRoles.join(", ")}` });
      return;
    }

    // Check if email already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      res.status(409).json({ error: "A user with this email already exists." });
      return;
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    // Create user with role-specific profile in a transaction
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        role,
        // Create role-specific profile
        ...(role === "student" && profileData.classId
          ? {
              student: {
                create: {
                  classId: parseInt(profileData.classId),
                  section: profileData.section || "A",
                  rollNo: parseInt(profileData.rollNo) || 1,
                  dob: new Date(profileData.dob || "2005-01-01"),
                },
              },
            }
          : {}),
        ...(role === "teacher" && profileData.subjectSpecialty
          ? {
              teacher: {
                create: {
                  subjectSpecialty: profileData.subjectSpecialty,
                },
              },
            }
          : {}),
        ...(role === "parent"
          ? {
              parent: {
                create: {},
              },
            }
          : {}),
        ...(role === "staff" && profileData.staffType
          ? {
              staff: {
                create: {
                  staffType: profileData.staffType,
                },
              },
            }
          : {}),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    // Sign JWT
    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    res.status(201).json({ user, token });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Internal server error during registration." });
  }
}

/**
 * POST /api/auth/login
 * Authenticate user and return JWT.
 */
export async function login(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "email and password are required." });
      return;
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        passwordHash: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
      res.status(401).json({ error: "Invalid email or password." });
      return;
    }

    // Sign JWT
    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Return user without passwordHash
    const { passwordHash: _, ...userWithoutPassword } = user;

    res.json({ user: userWithoutPassword, token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal server error during login." });
  }
}

/**
 * GET /api/auth/me
 * Return current authenticated user's profile.
 */
export async function getMe(req: Request, res: Response): Promise<void> {
  try {
    if (!req.user) {
      res.status(401).json({ error: "Authentication required." });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
        student: {
          include: {
            class: true,
          },
        },
        teacher: {
          include: {
            classes: true,
          },
        },
        parent: {
          include: {
            students: {
              include: {
                student: {
                  include: {
                    user: {
                      select: { name: true, email: true },
                    },
                    class: true,
                  },
                },
              },
            },
          },
        },
        staff: true,
      },
    });

    if (!user) {
      res.status(404).json({ error: "User not found." });
      return;
    }

    res.json({ user });
  } catch (error) {
    console.error("GetMe error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
}
