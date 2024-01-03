const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IdentityTypeSchema = new Schema({
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

const IdentityType = mongoose.model("IdentityType", IdentityTypeSchema);
module.exports = IdentityType;
