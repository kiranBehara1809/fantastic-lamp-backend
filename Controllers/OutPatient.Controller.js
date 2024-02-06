const createError = require("http-errors");
const mongoose = require("mongoose");
const OutPatientRegistrationSchema = require("../Models/outPatient/OutPatientRegn.model");

module.exports = {
  getAllPatients: async (req, res, next) => {
    try {
      const results = await OutPatientRegistrationSchema.find(
        { isActive: true },
        { __v: 0 }
      ).limit(500);
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },

  savePatient : async (req, res, next) => {
    try {
    //   const patientNo = "OP"+number.toString().padStart(6, "0");
    //   const UHID = "UHID"+number.toString().padStart(10, "0");
    console.log(req)
    }catch(error){
        console.log("Error while saving patient --> ",error.message);
        next(createError(500, error.message));
    }
  }
};
