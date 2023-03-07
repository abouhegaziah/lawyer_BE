const express = require("express");
const route = express.Router();
const multer = require("multer");

const DataController = require("../controller/DataController.js");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single("file");
route.post("/upload", upload, DataController.uploadFile);

module.exports = route;
