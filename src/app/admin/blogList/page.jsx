"use client";
import React, { useEffect, useState } from "react";

const BlogListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null;

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const author = user?.name;
      const res = await fetch(`/api/blog?author=${author || ""}`);
      const data = await res.json();
      setBlogs(data?.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      const res = await fetch(`/api/blog/${id}`, { 
        method: "DELETE",
      });
      if (res.ok) {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Blogs</h1>

      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}> 
                <td className="border px-4 py-2">{blog.title}</td>
                <td className="border px-4 py-2">{blog.category}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BlogListPage;
