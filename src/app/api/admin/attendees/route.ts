import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const limit = Math.min(100, parseInt(searchParams.get("limit") || "20", 10));
  const q = searchParams.get("q") || "";
  const status = searchParams.get("status") || "";
  const skip = (page - 1) * limit;

  try {
    const { prisma } = await import("@/lib/prisma");
    const where: Record<string, unknown> = {};
    if (status) where.status = status;
    if (q) {
      where.OR = [
        { fullName: { contains: q, mode: "insensitive" } },
        { email: { contains: q, mode: "insensitive" } },
        { registrationId: { contains: q, mode: "insensitive" } },
        { ticketNumber: { contains: q, mode: "insensitive" } },
      ];
    }

    const [attendees, total] = await Promise.all([
      prisma.registration.findMany({
        where,
        include: {
          ticketType: { select: { name: true, category: true } },
          checkIns: { select: { day: true, checkedInAt: true } },
        },
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
      }),
      prisma.registration.count({ where }),
    ]);

    return NextResponse.json({
      attendees,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch {
    return NextResponse.json({
      attendees: [],
      total: 0,
      page: 1,
      totalPages: 0,
      demo: true,
    });
  }
}
