import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// GET /api/products/:id
export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const productId = Number(id);

    if (!Number.isInteger(productId)) {
      return NextResponse.json(
        { message: "Invalid product ID" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      product: {
        ...product,
        price: Number(product.price),
        rating: Number(product.rating),
      },
    });
  } catch (error) {
    console.error("GET PRODUCT ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to fetch product",
      },
      { status: 500 }
    );
  }
}

// PUT /api/products/:id
export async function PUT(request, { params }) {
  try {
    const { id } = await params;

    const productId = Number(id);

    if (!Number.isInteger(productId)) {
      return NextResponse.json(
        { message: "Invalid product ID" },
        { status: 400 }
      );
    }

    const body = await request.json();

    const {
      name,
      category,
      price,
      image,
      rating,
      description,
    } = body;

    if (!name || !category || price === undefined || !image) {
      return NextResponse.json(
        {
          message:
            "Name, category, price and image are required.",
        },
        { status: 400 }
      );
    }

    const product = await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name: String(name).trim(),
        category: String(category).trim(),
        price: Number(price),
        image: String(image).trim(),
        rating:
          rating === undefined || rating === ""
            ? 0
            : Number(rating),
        description:
          description
            ? String(description).trim()
            : null,
      },
    });

    return NextResponse.json({
      product: {
        ...product,
        price: Number(product.price),
        rating: Number(product.rating),
      },
    });
  } catch (error) {
    console.error("PUT PRODUCT ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to update product",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// DELETE /api/products/:id
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    const productId = Number(id);

    if (!Number.isInteger(productId)) {
      return NextResponse.json(
        { message: "Invalid product ID" },
        { status: 400 }
      );
    }

    await prisma.product.delete({
      where: {
        id: productId,
      },
    });

    return NextResponse.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);

    return NextResponse.json(
      {
        message: "Failed to delete product",
        error:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      { status: 500 }
    );
  }
}