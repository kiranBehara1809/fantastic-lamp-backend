const express = require("express");
const router = express.Router();
const BloodGroup = require("../models/bloodGroupModel");

router.get("/bloodGroups/all", async (req, res) => {
  try {
    const bloodGroups = await BloodGroup.find();
    if (bloodGroups) {
      res.json({
        data: bloodGroups,
        statusCode: 200,
        msg: "Fetched Succesfully",
        count: bloodGroups.length || 0,
      });
    }else{
        res.json({
          data: [],
          statusCode: 404,
          msg: "No Data Found",
          count:  0,
        });
    }
  } catch (e) {
    res.status(500).json({
      data: [],
      statusCode: 500,
      msg: "Problem occured while fetching BloodGroups",
    });
    console.log("Error while Fetching All BloodGroups --> ", e);
  }
});

router.post("/bloodGroups/add", async (req, res) => {
  try {
    const bg = new BloodGroup({
      shortName: req.body.shortName,
      completeName: req.body.completeName,
    });
    const dbRes = await bg.save();
    if (dbRes) {
      res.json({ ...dbRes._doc, statusCode: 200, msg: "Saved Succesfully" });
    } else {
      res.json({ statusCode: 400, msg: "Error while saving Blood Groups" });
    }
  } catch (e) {
    console.log("Error while saving Blood Groups --> ", e);
    res.json({ statusCode: 400, msg: e.message });
  }
});

router.get("/gender/all", async (req, res) => {
  try {
      res.json({
        data: [],
        statusCode: 200,
        msg: "Fetched Succesfully",
        count: 0,
      });
  } catch (e) {
    res.json({
      data: [],
      statusCode: 500,
      msg: "Problem occured while fetching Gender",
    });
    console.log("Error while Fetching All Gender --> ", e);
  }
});


router.get("/salutation/all", async (req, res) => {
  try {
    res.json({
      data: [],
      statusCode: 200,
      msg: "Fetched Succesfully",
      count: 0,
    });
  } catch (e) {
    res.json({
      data: [],
      statusCode: 500,
      msg: "Problem occured while fetching Salutation",
    });
    console.log("Error while Fetching All Salutation --> ", e);
  }
});

router.get("/maritalStatus/all", async (req, res) => {
  try {
    res.json({
      data: [],
      statusCode: 200,
      msg: "Fetched Succesfully",
      count: 0,
    });
  } catch (e) {
    res.json({
      data: [],
      statusCode: 500,
      msg: "Problem occured while fetching Marital Status",
    });
    console.log("Error while Fetching All maritalStatus --> ", e);
  }
});

module.exports = router;
