import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [products, orders, messages] = await Promise.all([
      prisma.product.count(),
      prisma.order.count(),
      prisma.contactMessage.count(),
    ]);

    const recentOrders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

    return NextResponse.json({
      products,
      orders,
      messages,
      recentOrders,
    });
  } catch (error) {
    console.error("Admin stats error:", error);

    return NextResponse.json(
      {
        error: "Failed to load dashboard statistics",
      },
      { status: 500 }
    );
  }
}