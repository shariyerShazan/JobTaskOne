import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "General",
  },
  author: {
    type: String,
    required: true,
    default: "Anonymous"
  },
  authorImage: {
    type: String,
    required: true,
    default: "https://via.placeholder.com/150"
  },
  image: {
    type: String,
    required: true,
  },
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
