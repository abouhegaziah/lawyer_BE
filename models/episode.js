const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const episodeSchema = new Schema(
  {
    link: { type: String, required: true },
    title: { type: String, required: true },
    title_ar: { type: String },
    duration: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String },
    image: { type: String, required: true },
    number: { type: String, required: true },
  },
  { timestamps: true }
);

const Episode = mongoose.model("Episode", episodeSchema);
module.exports = Episode;
