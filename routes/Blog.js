const express = require("express");
const route = express.Router();

const BlogController = require("../controller/BlogController.js");

route.get("/", BlogController.index);
route.post("/addBlog", BlogController.addBlog);
route.delete("/deleteBlog/:id", BlogController.deleteBlog);

module.exports = route;
