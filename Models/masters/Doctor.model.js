const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DocAutoCompleteSchema = new Schema(
  { objId: { type: String }, label: { type: String } },
  { _id: false }
);

const DoctorSchema = new Schema({
  doctorName: {
    type: String,
    required: [true, "Doctor Name is required"],
  },
  docGender: {
    type: DocAutoCompleteSchema,
    required: [true, "Doctor Gender is required"],
  },
  speaciality: {
    type: DocAutoCompleteSchema,
    required: [true, "Speciality is required"],
  },
  degrees: {
    type: [DocAutoCompleteSchema],
    required: [true, "Degrees is required"],
  },
  docConsultationFees : {
    type : Number,
    required : [true, "Doctor Consultation Fees is required"],
    default : 300,
  },
  docSlotTimeIntervalInMinutes : {
    type: Number,
    default : 15,
  },
  additionalInformation: {
    type: String,
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

const Doctor = mongoose.model("Doctor", DoctorSchema);
module.exports = Doctor;
