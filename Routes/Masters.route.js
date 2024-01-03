const express = require("express");
const router = express.Router();

const MasterController = require("../Controllers/Master.Controller");

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
router.get("/city/all/:id", MasterController.getAllCityByState);
router.post("/city/save", MasterController.saveNewCity);
router.post("/city/update/:id", MasterController.updateCity);
router.post("/city/delete/:id", MasterController.deleteCity);

router.get("/nationality/all", MasterController.getAllNationality);
router.post("/nationality/save", MasterController.saveNewNationality);
router.post("/nationality/update/:id", MasterController.updateNationality);
router.post("/nationality/delete/:id", MasterController.deleteNationality);

router.get("/identityType/all", MasterController.getAllIdentityType);
router.post("/identityType/save", MasterController.saveNewIdentityType);
router.post("/identityType/update/:id", MasterController.updateIdentityType);
router.post("/identityType/delete/:id", MasterController.deleteIdentityType);

router.get("/patientType/all", MasterController.getAllPatientType);
router.post("/patientType/save", MasterController.saveNewPatientType);
router.post("/patientType/update/:id", MasterController.updatePatientType);
router.post("/patientType/delete/:id", MasterController.deletePatientType);

router.get("/patientCategory/all", MasterController.getAllPatientCategory);
router.post("/patientCategory/save", MasterController.saveNewPatientCategory);
router.post(
  "/patientCategory/update/:id",
  MasterController.updatePatientCategory
);
router.post(
  "/patientCategory/delete/:id",
  MasterController.deletePatientCategory
);

router.get("/religion/all", MasterController.getAllReligion);
router.post("/religion/save", MasterController.saveNewReligion);
router.post("/religion/update/:id", MasterController.updateReligion);
router.post("/religion/delete/:id", MasterController.deleteReligion);

router.get("/bank/all", MasterController.getAllBanks);
router.post("/bank/save", MasterController.saveNewBank);
router.post("/bank/update/:id", MasterController.updateBank);
router.post("/bank/delete/:id", MasterController.deleteBank);

router.get("/paymentType/all", MasterController.getAllPaymentType);
router.post("/paymentType/save", MasterController.saveNewPaymentType);
router.post("/paymentType/update/:id", MasterController.updatePaymentType);
router.post("/paymentType/delete/:id", MasterController.deletePaymentType);

router.get("/docSpeciality/all", MasterController.getAllDocSpeciality);
router.post("/docSpeciality/save", MasterController.saveNewDocSpeciality);
router.post("/docSpeciality/update/:id", MasterController.updateDocSpeciality);
router.post("/docSpeciality/delete/:id", MasterController.deleteDocSpeciality);

router.get("/docDegree/all", MasterController.getAllDocDegree);
router.post("/docDegree/save", MasterController.saveNewDocDegree);
router.post("/docDegree/update/:id", MasterController.updateDocDegree);
router.post("/docDegree/delete/:id", MasterController.deleteDocDegree);

router.get("/doctor/all", MasterController.getAllDoctor);
router.post("/doctor/save", MasterController.saveNewDoctor);
router.post("/doctor/update/:id", MasterController.updateDoctor);
router.post("/doctor/delete/:id", MasterController.deleteDoctor);



module.exports = router;
