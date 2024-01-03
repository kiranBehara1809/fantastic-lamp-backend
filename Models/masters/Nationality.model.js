const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NationalitySchema = new Schema({
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

const Nationality = mongoose.model("Nationality", NationalitySchema);
module.exports = Nationality;
