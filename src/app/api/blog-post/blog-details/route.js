import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    // const blogID ="65a8ebdd6075edad8195c402"
    const blogID =  url.searchParams.get("blogID");
    console.log("b blogID",blogID)

      await prisma.post.findUnique({
      where: {
        id: String(blogID),
      },
    });
  // const blogDetails =true
    if (blogDetails) {
      return NextResponse.json({
        success: true,
        data: blogDetails,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch the blog details ! Please try again",
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
