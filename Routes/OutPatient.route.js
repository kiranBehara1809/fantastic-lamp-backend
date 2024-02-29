const express = require("express");
const router = express.Router();

const OpController = require("../Controllers/OutPatient.Controller");

//Get a list of all patients
router.get("/all", OpController.getAllPatients);

// Get the latest count
router.get("/getOpLatestCount", OpController.getOpLatestCount);

// POST latest count
router.post("/saveOpLatestCount", OpController.saveOpLatestCount);

// update latest count
router.post("/updateOpLatestCount", OpController.updateOpLatestCount);

//create a new patient
router.post("/save", OpController.savePatient);

module.exports = router;
