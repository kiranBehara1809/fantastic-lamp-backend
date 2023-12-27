const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  shortName: {
    type: String,
    required: [true, "Short Name is required"],
  },
  completeName: {
    type: String,
    required: [true, "Complete Name is required"],
  },
  stateId: {
    type: String,
    required: [true, "State Id is required"],
  },
  stateName: {
    type: String,
    required: [true, "State Name is required"],
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

const City = mongoose.model("City", CitySchema);
module.exports = City;
