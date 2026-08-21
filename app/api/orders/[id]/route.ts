import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// =====================================================
// UPDATE ORDER STATUS
// PUT /api/orders/123
// =====================================================

export async function PUT(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await context.params;

    const orderId = Number(id);

    if (!Number.isInteger(orderId)) {
      return NextResponse.json(
        {
          message: "Invalid order ID.",
        },
        {
          status: 400,
        }
      );
    }

    const body = await request.json();

    const status = String(body.status || "").toUpperCase();

    const allowedStatuses = [
      "PENDING",
      "CONFIRMED",
      "SHIPPED",
      "DELIVERED",
      "CANCELLED",
    ];

    if (!allowedStatuses.includes(status)) {
      return NextResponse.json(
        {
          message: "Invalid order status.",
        },
        {
          status: 400,
        }
      );
    }

    const order = await prisma.order.update({
      where: {
        id: orderId,
      },

      data: {
        status,
      },

      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      order,
    });
  } catch (error) {
    console.error(
      "ORDER_UPDATE_ERROR:",
      error
    );

    return NextResponse.json(
      {
        message: "Unable to update order.",
      },
      {
        status: 500,
      }
    );
  }
}

// =====================================================
// DELETE ORDER
// DELETE /api/orders/123
// =====================================================

export async function DELETE(
  request: Request,
  context: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    const { id } = await context.params;

    const orderId = Number(id);

    if (!Number.isInteger(orderId)) {
      return NextResponse.json(
        {
          message: "Invalid order ID.",
        },
        {
          status: 400,
        }
      );
    }

    await prisma.order.delete({
      where: {
        id: orderId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Order deleted successfully.",
    });
  } catch (error) {
    console.error(
      "ORDER_DELETE_ERROR:",
      error
    );

    return NextResponse.json(
      {
        message: "Unable to delete order.",
      },
      {
        status: 500,
      }
    );
  }
}