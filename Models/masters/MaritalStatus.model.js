const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MaritalStatusSchema = new Schema({
  shortName: {
    type: String,
    required: [true, "Short Name is required"],
  },
  completeName: {
    type: String,
    required: [true, "Complete Name is required"],
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

const MaritalStatus = mongoose.model(
  "MaritalStatus",
  MaritalStatusSchema
);
module.exports = MaritalStatus;
