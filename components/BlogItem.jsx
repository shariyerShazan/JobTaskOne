"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMdArrowForward } from "react-icons/io";

const BlogItem = ({ item }) => {
  const { _id, image, category, title, description, createdAt } = item;

  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    if (createdAt) {
      const date = new Date(createdAt);
      setFormattedDate(
        date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );
    }
  }, [createdAt]);

  const fallbackImage = "/fallback-blog.png"; 
  const isValidSrc =
    image &&
    (image.startsWith("http://") ||
      image.startsWith("https://") ||
      image.startsWith("/"));

  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000] transition-all duration-500">
      <Link href={`/blog/${_id}`}>
        <Image
          src={isValidSrc ? image.trim() : fallbackImage}
          alt={title || "blog image"}
          width={400}
          height={400}
          className="border-b border-black h-[168px] object-cover"
        />
      </Link>

      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>

      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>

        <p className="mb-3 text-sm text-gray-700 tracking-tight">{description}</p>

        {formattedDate && (
          <p className="text-xs text-gray-500 mb-2">Published: {formattedDate}</p>
        )}

        <Link
          href={`/blog/${_id}`}
          className="flex items-center gap-2 py-2 font-semibold text-center"
        >
          Read More <IoMdArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
