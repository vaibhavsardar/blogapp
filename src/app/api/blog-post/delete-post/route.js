import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const extractIdOfBlogItemToBeDeleted = url.searchParams.get("id");

    const deletedBlogPost = await prisma.post.delete({
      where: {
        id: String(extractIdOfBlogItemToBeDeleted),
      },
    });

    if (deletedBlogPost) {
      return NextResponse.json({
        success: true,
        message: "Blog deleted successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to delete the blog ! Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}