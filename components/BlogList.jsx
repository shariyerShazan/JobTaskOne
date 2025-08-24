"use client"
import React, { useState, useEffect, useRef } from "react";
import BlogItem from "./BlogItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";

const BlogList = () => {
  const [ blogData ,setBlogData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/blog"); 
       if(res.data.success){
         setBlogData(res.data.blogs)
       }; 
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchData();
  }, []);
  
  const [menu, setMenu] = useState("All");
  const [categories, setCategories] = useState([]);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (blogData.length > 0) {
      const uniqueCategories = [...new Set(blogData.map((item) => item.category))];
      setCategories(uniqueCategories);
    }
  }, [blogData]);

  const filteredBlogs =
    menu === "All"
      ? blogData
      : blogData.filter((item) => item.category === menu);

  // Check scroll availability
  const checkForScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    checkForScrollPosition();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkForScrollPosition);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkForScrollPosition);
      }
    };
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div>
      {/* Category Buttons with Scroll */}
      <div className="flex items-center justify-center my-10 w-[90%] mx-auto">
        {/* Left Arrow */}
        {categories.length > 10 && (
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`mr-2 p-2 rounded-full shadow-md ${
              canScrollLeft
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <IoIosArrowBack size={20} />
          </button>
        )}

        {/* Scrollable Category Buttons */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-2"
        >
          <button
            onClick={() => setMenu("All")}
            className={`${
              menu === "All"
                ? "bg-black text-white px-4 py-1 rounded-sm"
                : "px-4 py-1"
            } cursor-pointer flex-shrink-0`}
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
              } cursor-pointer flex-shrink-0`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        {categories.length > 10 && (
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`ml-2 p-2 rounded-full shadow-md ${
              canScrollRight
                ? "bg-gray-200 hover:bg-gray-300"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            <IoIosArrowForward size={20} />
          </button>
        )}
      </div>

      {/* Blog List */}
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl mx-24">
        {filteredBlogs && filteredBlogs?.map((item ) => (
          <BlogItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
