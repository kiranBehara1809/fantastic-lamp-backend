const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReligionSchema = new Schema({
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

const Religion = mongoose.model("Religion", ReligionSchema);
module.exports = Religion;
