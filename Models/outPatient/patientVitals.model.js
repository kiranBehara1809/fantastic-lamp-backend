const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PatientVitalsSchema = new Schema({
  age: {
    type: String,
    required: [true, "Age is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  bloodPressure: {
    type: String,
    required: [true, "Blood Pressure is required"],
  },
  bodyTemperature: {
    type: String,
    required: [true, "Body Temperature is required"],
  },
  weight: {
    type: String,
  },
  checkedOn: {
    type: String,
    required: [true, "Vital Checked On is required"],
  },
  patientNo: {
    type: String,
    required: [true, "Patient No is required"],
    default: null,
  },
  UHID: {
    type: String,
    required: [true, "UHID is required"],
    default: null,
  },
});

const PatientVitals = mongoose.model("PatientVitals", PatientVitalsSchema);
module.exports = PatientVitals;
