import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type OrderItemInput = {
  productId: number;
  quantity: number;
};

// =====================================================
// GET ALL ORDERS — ADMIN
// =====================================================

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
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
      orders,
    });
  } catch (error) {
    console.error("ORDER_FETCH_ERROR:", error);

    return NextResponse.json(
      {
        message: "Unable to load orders.",
      },
      {
        status: 500,
      }
    );
  }
}

// =====================================================
// CREATE ORDER — CUSTOMER
// =====================================================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(
      body.name || body.customerName || ""
    ).trim();

    const phone = String(body.phone || "").trim();

    const items = body.items as OrderItemInput[];

    // Validate name
    if (!name) {
      return NextResponse.json(
        {
          error: "Please enter your name.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate phone
    if (!phone) {
      return NextResponse.json(
        {
          error: "Please enter your phone number.",
        },
        {
          status: 400,
        }
      );
    }

    // Validate cart
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        {
          error: "Your cart is empty.",
        },
        {
          status: 400,
        }
      );
    }

    // Get products from database
    const productIds = items.map((item) =>
      Number(item.productId)
    );

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    if (products.length !== productIds.length) {
      return NextResponse.json(
        {
          error: "One or more products no longer exist.",
        },
        {
          status: 400,
        }
      );
    }

    // Calculate total using database prices
    let total = 0;

    const orderItems = items.map((item) => {
      const product = products.find(
        (p) => p.id === Number(item.productId)
      );

      if (!product) {
        throw new Error("Product not found");
      }

      const quantity = Math.max(
        1,
        Number(item.quantity)
      );

      total += Number(product.price) * quantity;

      return {
        productId: product.id,
        quantity,
        price: product.price,
      };
    });

    // Create order
    const order = await prisma.order.create({
      data: {
        customerName: name,
        phone,
        total: total.toFixed(2),

        items: {
          create: orderItems,
        },
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
      orderId: order.id,
      total: order.total.toString(),
    });
  } catch (error) {
    console.error(
      "ORDER_CREATE_ERROR:",
      error
    );

    return NextResponse.json(
      {
        error: "Unable to place order.",
      },
      {
        status: 500,
      }
    );
  }
}