const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SingleDropdownSchema = new Schema({
  objId: {
    type: String,
    required: [true, "Obj Id is missing"],
  },
  label: {
    type: String,
    required: [true, "Label is missing"],
  },
   _id: false 
});

const OutPatientRegistration = new Schema({
  patientDetails: {
    salutation: {
      type: SingleDropdownSchema,
      required: [true, "Salutation is required"],
    },
    gender: {
      type: SingleDropdownSchema,
      required: [true, "Gender is required"],
    },
    bloodGroup: {
      type: SingleDropdownSchema,
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
    dateOfBirth: {
      type: String,
      required: [true, "Date Of Birth is required"],
    },
    ageString: {
      type: String,
      required: [true, "Age is required"],
    },
    maritalStatus: {
      type: SingleDropdownSchema,
      required: [true, "Marital Status is required"],
    },
  },
  communicationDetails: {
    addressLine1: {
      type: String,
      required: [true, "Address Line is required"],
    },
    country: {
      type: SingleDropdownSchema,
      required: [true, "Country is required"],
    },
    state: {
      type: SingleDropdownSchema,
      required: [true, "State is required"],
    },
    city: {
      type: SingleDropdownSchema,
      required: [true, "City is required"],
    },
    contactNo: {
      type: String,
      required: [true, "Contact No is required"],
    },
    alternateContactNo: {
      type: String,
    },
    whatsAppNo: {
      type: String,
    },
  },
  kinEmergencyContDetails: {
    kinFirstName: {
      type: String,
      required: [true, "Kin First Name is required"],
    },
    kinLastName: {
      type: String,
      required: [true, "Kin Last Name is required"],
    },
    kinRelation: {
      type: SingleDropdownSchema,
      required: [true, "Kin Relation is required"],
    },
    kinComments: {
      type: String,
    },
  },
  docSelectionDetails: {
    doctor: {
      type: SingleDropdownSchema,
      required: [true, "Doctor is required"],
    },
  },
  commonDetails: {
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
  },
});

const OutPatientRegistrationSchema = mongoose.model(
  "OutPatientRegistrations",
  OutPatientRegistration
);
module.exports = OutPatientRegistrationSchema;
