const express = require("express");
const router = express.Router();

const OpController = require("../Controllers/OutPatient.Controller");

//Get a list of all patients
router.get("/all", OpController.getAllPatients);

//create a new patient
router.get("/save", OpController.getAllPatients);

module.exports = router;
