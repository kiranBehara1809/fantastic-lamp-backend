const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OurUserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  middleName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  userName: {
    type: String,
    unique: true,
    dropDups: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: [true, " Role is required"],
  },
  idType: {
    type: String,
    required: [true, "Id Type is required"],
  },
  idNo: {
    type: String,
    required: [true, "Id No is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Contact No is required"],
  },
  isActive: {
    type: Boolean,
    default: true,
    required: false,
  },
  isLocked: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: "greenTheme",
  },
});

const OurUsers = mongoose.model("ourUsers", OurUserSchema);
module.exports = OurUsers;
