const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientCategorySchema = new Schema({
  shortName: {
    type: String,
    required: [true, "Short Name is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
    required: false,
  },
});

const PatientCategory = mongoose.model(
  "PatientCategory",
  PatientCategorySchema
);
module.exports = PatientCategory;
