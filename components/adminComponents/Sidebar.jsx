"use client";
import Image from "next/image";
import React from "react";
import blog from "../../public/blog.avif";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineArticle } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const linkClass = (path) =>
    `flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-3px_3px_0px_#000] ${
      pathname === path ? "shadow-[-7px_7px_0px_#000]" : ""
    }`;

  return (
    <div className="flex flex-col bg-gray-100">
      {/* Logo section */}
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image
          src={blog}
          width={100}
          alt="Logo"
          className="scale-175 w-[80px] sm:w-auto object-cover object-bottom"
        />
      </div>

      {/* Menu section */}
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0 space-y-5">
          {/* Add Blog */}
          <Link href="/admin/addProduct" className={linkClass("/addProduct")}>
            <IoMdAddCircleOutline size={20} /> <p>Add blog</p>
          </Link>

          {/* Blog List */}
          <Link href="/admin/blogList" className={linkClass("/blogList")}>
            <MdOutlineArticle size={20} /> <p>Blog List</p>
          </Link>

          {/* Subscription */}
          <Link href="/admin/subscription" className={linkClass("/subscription")}>
            <IoMdMailUnread size={20} /> <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
