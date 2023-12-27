const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StateSchema = new Schema({
  shortName: {
    type: String,
    required: [true, "Short Name is required"],
  },
  completeName: {
    type: String,
    required: [true, "Complete Name is required"],
  },
  countryId: {
    type: String,
    required: [true, "Country Id is required"],
  },
  countryName: {
    type: String,
    required: [true, "Country Name is required"],
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

const State = mongoose.model("State", StateSchema);
module.exports = State;
