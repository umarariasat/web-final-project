import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error("GET_MESSAGES_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load messages.",
        messages: [],
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    const id = Number(body.id);

    if (!id || Number.isNaN(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid message ID.",
        },
        { status: 400 }
      );
    }

    const existingMessage = await prisma.contactMessage.findUnique({
      where: {
        id,
      },
    });

    if (!existingMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "Message not found.",
        },
        { status: 404 }
      );
    }

    await prisma.contactMessage.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Message deleted successfully.",
    });
  } catch (error) {
    console.error("DELETE_MESSAGE_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete message.",
      },
      { status: 500 }
    );
  }
}