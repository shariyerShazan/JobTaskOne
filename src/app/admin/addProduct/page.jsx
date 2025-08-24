"use client";
import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function AddProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageURL, setImageURL] = useState(""); 
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!title || !description || !imageURL) {
      setMessage("Title, description and image are required.");
      return;
    }
  
    try {
      const res = await axios.post("/api/blog", {
        title,
        description,
        category,
        author: "",
        authorImage: "",
        image : imageURL, 
      });
  
      if (res.data.success) {
        toast(res.data.message);
        setMessage("Blog added successfully!");
        setTitle("");
        setDescription("");
        setCategory("");
        setImageURL("");
      }
    } catch (err) {
      console.error(err);
      toast(err.response?.data?.message || "Something went wrong!");
      setMessage("Something went wrong!");
    }
  };
  
  

  return (
    <div className="flex items-start gap-4 mt-22 px-4 md:px-12">
      <ToastContainer />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Add Product / Blog</h1>

        {message && <p className="mb-4 text-red-600 font-medium">{message}</p>}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Row 1: Title + Category */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="title" className="mb-1 font-medium text-gray-700">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="category" className="mb-1 font-medium text-gray-700">Category</label>
              <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1 font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Image URL Input */}
          <div className="flex flex-col">
            <label htmlFor="imageURL" className="mb-1 font-medium text-gray-700">Image URL</label>
            <input
              id="imageURL"
              type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              placeholder="Enter image URL"
              className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!title || !description || !imageURL}
            className="bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 transition text-white font-semibold py-3 rounded-md mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
