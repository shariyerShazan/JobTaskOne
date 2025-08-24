import { NextResponse } from "next/server";
import connectDB from "../../../../../lib/config/db";
import { Blog } from "../../../../../lib/models/blog.model";

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = params; 

    const deleted = await Blog.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error deleting blog", error }, { status: 500 });
  }
}
