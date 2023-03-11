const express = require("express");
const route = express.Router();

const EpisodeController = require("../controller/EpisodeController.js");

route.get("/", EpisodeController.index);
route.post("/addEpisode", EpisodeController.addEpisode);

module.exports = route;
