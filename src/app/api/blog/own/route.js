// src/app/api/blog/route.js
import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/config/db";
import { Blog } from "../../../../../lib/models/blog.model";


export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const author = searchParams.get("author")

    let blogs;
    if (author) {
      blogs = await Blog.find({ author }); 
    } else {
      return NextResponse.json({ success: false });
    }

    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    console.error("API GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
