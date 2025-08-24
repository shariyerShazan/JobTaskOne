// src/app/api/blog/route.js
import { NextResponse } from "next/server";
import connectDB from "../../../../lib/config/db";
import { Blog } from "../../../../lib/models/blog.model";

export async function POST(req) {
  try {
    await connectDB(); 

    const data = await req.json();
    const { title, description, category, author, authorImage, image } = data;


    if (!title || !description || !author || !authorImage || !image) {
      return NextResponse.json(
        { success: false, message: "All required fields must be provided" },
        { status: 400 }
      );
    }
    const blog = await Blog.create({
      title,
      description,
      category,
      author,
      authorImage,
      image,
    });

    return NextResponse.json({ success: true, message: "Blog added", blog });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB(); // connect DB per request
    const blogs = await Blog.find({}, "title description image category author authorImage");
    return NextResponse.json({success: true, blogs });
  } catch (error) {
    console.error("API GET Error:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
