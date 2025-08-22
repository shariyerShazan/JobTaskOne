import React, { useState, useEffect } from "react";
import blogData from "../Assets/data";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // unique categories বের করা
    const uniqueCategories = [...new Set(blogData.map((item) => item.category))];
    setCategories(uniqueCategories);
  }, []);

  // filter করা data
  const filteredBlogs =
    menu === "All"
      ? blogData
      : blogData.filter((item) => item.category === menu);

  return (
    <div>
      {/* Dynamic Category Buttons */}
      <div className="flex justify-center gap-6 my-10 flex-wrap">
        <button
          onClick={() => setMenu("All")}
          className={`${
            menu === "All"
              ? "bg-black text-white px-4 py-1 rounded-sm"
              : "px-4 py-1"
          } cursor-pointer`}
        >
          All
        </button>

        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setMenu(cat)}
            className={`${
              menu === cat
                ? "bg-black text-white px-4 py-1 rounded-sm"
                : "px-4 py-1"
            } cursor-pointer`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl mx-24">
        {filteredBlogs.map((item) => (
          <BlogItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
