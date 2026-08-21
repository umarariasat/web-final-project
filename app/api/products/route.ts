import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/products
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("GET /api/products error:", error);

    return NextResponse.json(
      {
        error: "Failed to fetch products",
      },
      {
        status: 500,
      }
    );
  }
}

// POST /api/products
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description || null,
        price: Number(body.price),
        image: body.image,
        category: body.category,
        rating:
          body.rating !== undefined &&
          body.rating !== null
            ? Number(body.rating)
            : 0,
      },
    });

    return NextResponse.json(product, {
      status: 201,
    });
  } catch (error) {
    console.error("POST /api/products error:", error);

    return NextResponse.json(
      {
        error: "Failed to create product",
        details:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}