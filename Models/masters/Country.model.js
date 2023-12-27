const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  shortName: {
    type: String,
    required: [true, "Short Name is required"],
  },
  completeName: {
    type: String,
    required: [true, "Complete Name is required"],
  },
  currencySymbol: {
    type: String,
    required: [true, "Currency Symbol is required"],
  },
  currencyName: {
    type: String,
    required: [true, "Currency Name is required"],
  },
  callingCode: {
    type: String,
    required: [true, "Calling Code is required"],
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

const Country = mongoose.model("Country", CountrySchema);
module.exports = Country;
