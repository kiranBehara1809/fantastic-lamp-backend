const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
  },
  middleName: {
    type: String,
    required: false,
  },
  userName: {
    type: String,
    unique: true,
    dropDups: true,
  },
  password : {
    type : String,
    required: true
  },
  age: {
    type: Number,
    min: 0,
    max: 110,
  },
  isActive: {
    type: Boolean,
    default: true,
    required: false,
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
