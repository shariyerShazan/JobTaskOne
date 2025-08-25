"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/adminComponents/Sidebar";
import Image from "next/image";
import logo from "../../../public/blog.avif";

export default function AdminLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Client-side only
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || status === "loading") return;

    if (!session || session.user?.email !== "shazan1@gmail.com") {
      router.push("/login");
      localStorage.removeItem("user");
    } else {
      const { id, name, email, image } = session.user;
      localStorage.setItem(
        "user",
        JSON.stringify({ id, name, email, profilePicture: image })
      );
    }
  }, [mounted, session, status]);

  if (!mounted || status === "loading" || session?.user?.email !== "shazan1@gmail.com") {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-3 max-h-16 px-12 border-b border-black">
          <h3 className="font-medium text-lg">Admin panel</h3>
          <Image src={logo} width={40} alt="" className="rounded-full w-12 h-12" />
        </div>
        <div className="flex justify-center items-center h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
