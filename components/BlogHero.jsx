"use client";

import React from "react";
import Image from "next/image";
import blogHero from "../public/blog.avif"

export default function BlogHero() {
  return (
    <section className="relative bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={blogHero}
          alt="Blog Hero"
          className="w-full h-full object-cover opacity-30"
          fill
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 py-24 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-lg sm:text-2xl text-gray-700 mb-8">
          Discover interesting articles, tips, and stories.
        </p>

        {/* Author Info */}
        {/* <div className="flex items-center gap-4">
          <Image
            src="/default-avatar.png" // কোনো placeholder author image
            alt="Author"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-gray-900 font-semibold">Admin</p>
            <p className="text-gray-500 text-sm">Jan 1, 2025</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
