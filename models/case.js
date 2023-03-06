const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
    },
  },
  { timestamps: true }
);

const Case = mongoose.model("Company", caseSchema);
module.exports = Case;
