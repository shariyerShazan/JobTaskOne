"use client";
import React, { useState } from "react";

export default function AddProductPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [authorImage, setAuthorImage] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("author", author);
    formData.append("authorImage", authorImage);
    formData.append("image", image);

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setMessage("Blog added successfully!");
        setTitle("");
        setDescription("");
        setCategory("");
        setAuthor("");
        setAuthorImage("");
        setImage(null);
        setImagePreview(null);
      } else {
        setMessage(data.error || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      setMessage("Something went wrong!");
    }
  };

  return (
    <div className="flex items-center gap-4 mt-22 px-4 md:px-12 ">
      {/* pt-24 gives space from navbar */}
      <div className=" max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Add Product / Blog</h1>

        {message && <p className="mb-4 text-red-600 font-medium">{message}</p>}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Row 1: Title + Category */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="title" className="mb-1 font-medium text-gray-700">
                Title 
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="category" className="mb-1 font-medium text-gray-700">
                Category
              </label>
              <input
                id="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Row 2: Author + Author Image URL */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label htmlFor="author" className="mb-1 font-medium text-gray-700">
                Author
              </label>
              <input
                id="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label htmlFor="authorImage" className="mb-1 font-medium text-gray-700">
                Author Image URL
              </label>
              <input
                id="authorImage"
                type="text"
                value={authorImage}
                onChange={(e) => setAuthorImage(e.target.value)}
                className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="border p-3 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div className="flex flex-col">
            <label htmlFor="image" className="mb-1 font-medium text-gray-700">
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              className="border p-3 rounded-md"
            />
          </div>

          {/* Image Preview */}
        

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!title || !description || !image}
            className="bg-blue-600 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400 transition text-white font-semibold py-3 rounded-md mt-4"
          >
            Submit
          </button>
        </form>
        
      </div>
      <div>
      {imagePreview && (
            <div className="mt-2">
              <p className="mb-1 font-medium text-gray-700">Image Preview:</p>
              <div className="w-full md:w-64 h-64 border rounded-lg overflow-hidden">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
