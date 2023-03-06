const express = require("express");
const route = express.Router();

const CaseController = require("../controller/CaseController.js");

route.get("/", CaseController.index);
route.post("/addCase", CaseController.addCase);

module.exports = route;
