const createError = require("http-errors");
const mongoose = require("mongoose");
const OutPatientRegistrationSchema = require("../Models/outPatient/OutPatientRegn.model");
const OpCountTrigger = require("../Models/outPatient/OutPatientCountTrigger.model");

module.exports = {
  getAllPatients: async (req, res, next) => {
    try {
      const results = await OutPatientRegistrationSchema.find({ __v: 0 }).limit(
        500
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },

  getOpLatestCount: async () => {
    try {
      const results = await OpCountTrigger.find({ __v: 0 });
      res.send(results);
      return results[0].count;
    } catch (error) {
      console.log(error.message);
    }
  },

  saveOpLatestCount: async (req, res, next) => {
    try {
      const newCount = new OpCountTrigger({
        count: 1,
      });
      await newCount.save();
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },

  updateOpLatestCount: async (req, res, next) => {
    try {
      const onlyObj = await OpCountTrigger.find({ __v: 0 });
      const result = await OpCountTrigger.findByIdAndUpdate(
        onlyObj[0]._id,
        { count: onlyObj[0].count + 1 },
        { new: true }
      );
      if (!result) {
        throw createError(404, "Error while updating Op Latest Count");
      }
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },

  savePatient: async (req, res, next) => {
    let opNo = '';
    let uhid = '';
    try {
      //   const patientNo = "OP"+number.toString().padStart(6, "0");
      //   const UHID = "UHID"+number.toString().padStart(10, "0");
      // const opTriggerCount = await OpCountTrigger.find({ __v: 0 });
      let opLatestCount = 0;
      try {
        const results = await OpCountTrigger.find({ __v: 0 });
        opLatestCount = results[0].count + 1;
      } catch (error) {
        console.log(error.message);
        next(createError(500, error.message));
      }
      opNo = "OP" + opLatestCount.toString().padStart(6, "0");
      uhid = "UHID" + opLatestCount.toString().padStart(10, "0");
      const newPatient = new OutPatientRegistrationSchema({
        ...req.body,
        commonDetails: {
          patientType: req.body.patientType || "OP",
          patientNo: opNo,
          UHID: uhid,
          registeredOn: req.body.registeredOn,
          registeredBy: req.body.registeredBy,
          registeredByUserName: req.body.registeredByUserName,
        },
      });
      const result = await newPatient.save();
      if (result) {
        try {
          const onlyObj = await OpCountTrigger.find({ __v: 0 });
          const result = await OpCountTrigger.findByIdAndUpdate(
            onlyObj[0]._id,
            { count: onlyObj[0].count + 1 },
            { new: true }
          );
          if (!result) {
            throw createError(404, "Error while updating Op Latest Count");
          }
        } catch (error) {
          console.log(error.message);
          next(createError(500, error.message));
        }
        res.send({
          status: 200,
          msg: "Patient Registered Succesfully",
          patientNo: opNo,
          uhid : uhid
        });
      }
    } catch (error) {
      console.log("Error while saving patient --> ", error.message);
      next(createError(500, error.message));
    }
  },
};
