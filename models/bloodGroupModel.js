const mongoose = require("mongoose");

const bloodGroupSchema = mongoose.Schema({
  shortName: {
    required: true,
    type: String,
  },
  completeName: {
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("BloodGroup", bloodGroupSchema);
