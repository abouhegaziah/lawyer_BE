const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    post: { type: String, required: true },
    title_ar: { type: String },
    post_ar: { type: String },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
