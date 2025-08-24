import { NextResponse } from "next/server";
import { connetDB } from "../../../../lib/config/db";
import { v2 as cloudinary } from "cloudinary";
import { Blog } from "../../../../lib/models/blog.model";

const runDB = async ()=>{
    await connetDB()
}
runDB()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

export async function GET() {
    try {
      const blogs = await Blog.find();
      return NextResponse.json(blogs, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
  }

export async function POST(req) {
    try {
      const formData = await req.formData();
      const file = formData.get("image");
  
      if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
      }
  
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
  
      const result = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "uploads" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });
      const blogData = {
        title : `${formData.get("title")}`,
        description : `${formData.get("description")}`,
        category : `${formData.get("category")}`,
        author : `${formData.get("author")}`,
        image : `${result.secure_url}`,
        authorImage : `${formData.get("authorImage")}`
      }
      await Blog.create(blogData)
      return NextResponse.json({success: true , message : "Blog added"})
  
    } catch (error) {
      console.error("Upload error:", error);
      return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
  }
  