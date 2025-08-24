import connectDB from "@/lib/config/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { User } from "../../../../../lib/models/user.mode";

export async function POST(req) {
  await connectDB();
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return NextResponse.json({ success: false, message: "All fields required" }, { status: 400 });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ success: false, message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashedPassword });

  return NextResponse.json({ success: true, message: "User registered", user: { name: user.name, email: user.email } });
}
