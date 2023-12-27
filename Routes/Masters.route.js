const express = require("express");
const router = express.Router();

const MasterController = require("../Controllers/Master.Controller")

router.get("/bloodGroup/all", MasterController.getAllBloodGroups);
router.post("/bloodGroup/update/:id", MasterController.updateBloodGroup);
router.post("/bloodGroup/delete/:id", MasterController.deleteBloodGroup);

router.get("/gender/all", MasterController.getAllGenders);
router.post("/gender/save", MasterController.saveNewGender);
router.post("/gender/update/:id", MasterController.updateGender);
router.post("/gender/delete/:id", MasterController.deleteGender);

router.get("/maritalStatus/all", MasterController.getAllMaritalStatus);
router.post("/maritalStatus/save", MasterController.saveNewMaritalStatus);
router.post("/maritalStatus/update/:id", MasterController.updateMaritalStatus);
router.post("/maritalStatus/delete/:id", MasterController.deleteMaritalStatus);

router.get("/salutation/all", MasterController.getAllSalutation);
router.post("/salutation/save", MasterController.saveNewSalutation);
router.post("/salutation/update/:id", MasterController.updateSalutation);
router.post("/salutation/delete/:id", MasterController.deleteSalutation);

router.get("/relation/all", MasterController.getAllRelation);
router.post("/relation/save", MasterController.saveNewRelation);
router.post("/relation/update/:id", MasterController.updateRelation);
router.post("/relation/delete/:id", MasterController.deleteRelation);

router.get("/language/all", MasterController.getAllLanguage);
router.post("/language/save", MasterController.saveNewLanguage);
router.post("/language/update/:id", MasterController.updateLanguage);
router.post("/language/delete/:id", MasterController.deleteLanguage);

router.get("/country/all", MasterController.getAllCountry);
router.post("/country/save", MasterController.saveNewCountry);
router.post("/country/update/:id", MasterController.updateCountry);
router.post("/country/delete/:id", MasterController.deleteCountry);

router.get("/state/all", MasterController.getAllState);
router.get("/state/all/:id", MasterController.getAllStateByCountry);
router.post("/state/save", MasterController.saveNewState);
router.post("/state/update/:id", MasterController.updateState);
router.post("/state/delete/:id", MasterController.deleteState);

router.get("/city/all", MasterController.getAllCity);
router.get("/state/all/:id", MasterController.getAllCityByState);
router.post("/city/save", MasterController.saveNewCity);
router.post("/city/update/:id", MasterController.updateCity);
router.post("/city/delete/:id", MasterController.deleteCity);

module.exports = router;
