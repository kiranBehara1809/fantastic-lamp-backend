const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OutPatientRegistration = new Schema({
  patientNo: {
    type: String,
    unique: true,
    required: [true, "Patient No is required"],
  },
  UHID: {
    type: String,
    unique: true,
    required: [true, "UHID is required"],
  },
  salutation: {
    type: String,
    required: [true, "Salutation is required"],
  },
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
  mobileNo: {
    type: String,
    required: [true, "Mobile No is required"],
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date Of Birth is required"],
  },
  age: {
    type: String,
    required: [true, "Age Of Birth is required"],
  },
  patientType: {
    type: String,
    required: [true, "Patient Type is required"],
  },
  registeredOn: {
    type: String,
    required: [true, "Patient Registered On is required"],
  },
  registeredBy: {
    type: String,
    required: [true, "Patient Registered By is required"],
  },
  bloodGroup: {
    type: String,
    default: null,
  },
  idType: {
    type: String,
    default: null,
  },
  idNo: {
    type: String,
    default: null,
  },
});

const OutPatientRegistrationSchema = mongoose.model(
  "OutPatientRegistrations",
  OutPatientRegistration
);
module.exports = OutPatientRegistrationSchema;
