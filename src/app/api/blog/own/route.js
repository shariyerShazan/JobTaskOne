// src/app/api/blog/route.js
import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/config/db";
import { Blog } from "../../../../../lib/models/blog.model";

export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const author = searchParams.get("author");

    let blogs;
    if (author) {
      // Filter by author if provided
      blogs = await Blog.find({ author: author });
    } else {
      // Return all blogs if no author specified
      blogs = await Blog.find({});
    }

    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    console.error("API GET Error:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch blogs" }, { status: 500 });
  }
}
