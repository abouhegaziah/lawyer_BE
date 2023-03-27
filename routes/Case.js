const express = require("express");
const route = express.Router();

const CaseController = require("../controller/CaseController.js");

route.get("/", CaseController.index);
route.post("/addCase", CaseController.addCase);
route.post("/aboutUs", CaseController.aboutUs);
route.delete("/deleteCase/:id", CaseController.deleteCase);

module.exports = route;
