const express = require("express");
const route = express.Router();

const BlogController = require("../controller/BlogController.js");

route.get("/", BlogController.index);
route.post("/addBlog", BlogController.addBlog);

module.exports = route;
