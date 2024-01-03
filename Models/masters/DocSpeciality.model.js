const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocSpeacialitySchema = new Schema({
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

const DocSpeciality = mongoose.model("DocSpeciality", DocSpeacialitySchema);
module.exports = DocSpeciality;
