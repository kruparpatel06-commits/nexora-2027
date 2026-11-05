import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSession, hashPassword, verifyPassword } from "@/lib/auth";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = schema.parse(body);

    try {
      const { prisma } = await import("@/lib/prisma");

      let user = await prisma.user.findUnique({
        where: { email: email.toLowerCase() },
      });

      if (!user) {
        const count = await prisma.user.count();
        if (count === 0 && email.toLowerCase() === "admin@nexora2027.com") {
          const passwordHash = await hashPassword(password);
          user = await prisma.user.create({
            data: {
              email: "admin@nexora2027.com",
              passwordHash,
              name: "Super Admin",
              role: "SUPER_ADMIN",
            },
          });
        }
      }

      if (!user || !user.isActive) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
      }

      const valid = await verifyPassword(password, user.passwordHash);
      if (!valid) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
      }

      await createSession({
        userId: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      });

      return NextResponse.json({
        success: true,
        user: { id: user.id, email: user.email, name: user.name, role: user.role },
      });
    } catch (dbErr) {
      console.warn("DB unavailable for login:", dbErr);
      if (email.toLowerCase() === "admin@nexora2027.com" && password === "nexora2027") {
        await createSession({
          userId: "demo-admin",
          email: "admin@nexora2027.com",
          role: "SUPER_ADMIN",
          name: "Demo Super Admin",
        });
        return NextResponse.json({
          success: true,
          user: { id: "demo-admin", email: "admin@nexora2027.com", name: "Demo Super Admin", role: "SUPER_ADMIN" },
          demo: true,
        });
      }
      return NextResponse.json(
        { error: "Database unavailable. Use demo: admin@nexora2027.com / nexora2027" },
        { status: 503 }
      );
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
