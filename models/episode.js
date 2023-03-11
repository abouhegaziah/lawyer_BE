const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema(
  {
    link: { type: String, required: true },
    title: { type: String, required: true },
    duration: { type: String, required: true },
  },
  { timestamps: true }
);

const Episode = mongoose.model("Episode", episodeSchema);
module.exports = Episode;
