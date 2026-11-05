import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { prisma } = await import("@/lib/prisma");

    const [
      totalRegistrations,
      confirmed,
      pending,
      cancelled,
      day1CheckIns,
      day2CheckIns,
      ticketBreakdown,
    ] = await Promise.all([
      prisma.registration.count(),
      prisma.registration.count({ where: { status: "CONFIRMED" } }),
      prisma.registration.count({ where: { status: "PENDING" } }),
      prisma.registration.count({ where: { status: "CANCELLED" } }),
      prisma.checkIn.count({ where: { day: "DAY_1" } }),
      prisma.checkIn.count({ where: { day: "DAY_2" } }),
      prisma.registration.groupBy({
        by: ["ticketTypeId"],
        _count: true,
      }),
    ]);

    const ticketTypes = await prisma.ticketType.findMany();
    const ticketMap = Object.fromEntries(
      ticketTypes.map((t) => [t.id, t.name])
    );

    return NextResponse.json({
      totalRegistrations,
      confirmed,
      pending,
      cancelled,
      day1CheckIns,
      day2CheckIns,
      attendanceRate:
        totalRegistrations > 0
          ? Math.round(
              ((day1CheckIns + day2CheckIns) / (totalRegistrations * 2)) * 100
            )
          : 0,
      ticketBreakdown: ticketBreakdown.map((t) => ({
        name: ticketMap[t.ticketTypeId] || "Unknown",
        count: t._count,
      })),
    });
  } catch {
    return NextResponse.json({
      totalRegistrations: 0,
      confirmed: 0,
      pending: 0,
      cancelled: 0,
      day1CheckIns: 0,
      day2CheckIns: 0,
      attendanceRate: 0,
      ticketBreakdown: [],
      demo: true,
    });
  }
}
