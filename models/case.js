const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const caseSchema = new Schema(
  {
    name_1: { type: String, required: true },
    number_1: { type: String, required: true },
    email_1: { type: String, required: true },
    address_1: { type: String },
    name_2: { type: String, required: true },
    number_2: { type: String },
    email_2: { type: String },
    address_2: { type: String },
    subject: { type: String, required: true },
    case: { type: String, required: true },
  },
  { timestamps: true }
);

const Case = mongoose.model("Case", caseSchema);
module.exports = Case;
