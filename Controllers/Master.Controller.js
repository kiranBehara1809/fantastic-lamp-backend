const createError = require("http-errors");
const mongoose = require("mongoose");

const BloodGroupSchema = require("../Models/masters/BloodGroup.model");
const GenderSchema = require("../Models/masters/Gender.model");
const MaritalStatusSchema = require("../Models/masters/MaritalStatus.model");
const SalutationSchema = require("../Models/masters/Salutation.model");
const RelationSchema = require("../Models/masters/Relation.model");
const LanguageSchema = require("../Models/masters/Language.model");
const StateSchema = require("../Models/masters/State.model");
const CountrySchema = require("../Models/masters/Country.model");
const CitySchema = require("../Models/masters/City.model");
const NationalitySchema = require("../Models/masters/Nationality.model");
const IdentityTypeSchema = require("../Models/masters/IdentityType.model");
const PatientTypeSchema = require("../Models/masters/PatientType.model");
const PatientCategorySchema = require("../Models/masters/PatientCategory.model");
const ReligionSchema = require("../Models/masters/Religion.model");
const BankSchema = require("../Models/masters/Banks.model");
const PaymentTypeSchema = require("../Models/masters/PaymentType.model");
const DocSpecialitySchema = require("../Models/masters/DocSpeciality.model");
const DocDegreeSchema = require("../Models/masters/DocDegree.model");
const DoctorSchema = require("../Models/masters/Doctor.model");

module.exports = {
  getAllBloodGroups: async (req, res, next) => {
    try {
      const results = await BloodGroupSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateBloodGroup: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await BloodGroupSchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Blood Group does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Blood Group Id"));
      }
      next(error);
    }
  },
  deleteBloodGroup: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await BloodGroupSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Blood Group does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Blood Group id"));
        return;
      }
      next(error);
    }
  },

  getAllGenders: async (req, res, next) => {
    try {
      const results = await GenderSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewGender: async (req, res, next) => {
    try {
      const newGender = new GenderSchema({ ...req.body });
      const results = await newGender.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateGender: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await GenderSchema.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, "Gender does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Gender Id"));
      }
      next(error);
    }
  },
  deleteGender: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await GenderSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Gender does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Gender id"));
        return;
      }
      next(error);
    }
  },

  getAllMaritalStatus: async (req, res, next) => {
    try {
      const results = await MaritalStatusSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewMaritalStatus: async (req, res, next) => {
    try {
      const newMaritalStatus = new MaritalStatusSchema({ ...req.body });
      const results = await newMaritalStatus.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateMaritalStatus: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await MaritalStatusSchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Marital Status does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Marital Status Id"));
      }
      next(error);
    }
  },
  deleteMaritalStatus: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await MaritalStatusSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Marital Status does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Marital Status id"));
        return;
      }
      next(error);
    }
  },

  getAllSalutation: async (req, res, next) => {
    try {
      const results = await SalutationSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewSalutation: async (req, res, next) => {
    try {
      const newSalutation = new SalutationSchema({ ...req.body });
      const results = await newSalutation.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateSalutation: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await SalutationSchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Salutation does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Salutation Id"));
      }
      next(error);
    }
  },
  deleteSalutation: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await SalutationSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Salutation does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Salutation id"));
        return;
      }
      next(error);
    }
  },

  getAllRelation: async (req, res, next) => {
    try {
      const results = await RelationSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewRelation: async (req, res, next) => {
    try {
      const newRelation = new RelationSchema({ ...req.body });
      const results = await newRelation.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateRelation: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await RelationSchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Relation does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Relation Id"));
      }
      next(error);
    }
  },
  deleteRelation: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await RelationSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Relation does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Relation id"));
        return;
      }
      next(error);
    }
  },

  getAllLanguage: async (req, res, next) => {
    try {
      const results = await LanguageSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewLanguage: async (req, res, next) => {
    try {
      const newLanguage = new LanguageSchema({ ...req.body });
      const results = await newLanguage.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateLanguage: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await LanguageSchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Language does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Language Id"));
      }
      next(error);
    }
  },
  deleteLanguage: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await LanguageSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Language does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Language id"));
        return;
      }
      next(error);
    }
  },

  getAllState: async (req, res, next) => {
    try {
      const results = await StateSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  getAllStateByCountry: async (req, res, next) => {
    const countryId = req.params.id;
    if (countryId === null || countryId === "" || countryId === undefined) {
      next(createError(400, "Country Id is missing"));
      return;
    }
    try {
      const results = await StateSchema.find(
        { isActive: true, countryId: countryId },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewState: async (req, res, next) => {
    try {
      const newState = new StateSchema({ ...req.body });
      const results = await newState.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateState: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await StateSchema.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, "State does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid State Id"));
      }
      next(error);
    }
  },
  deleteState: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await StateSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "State does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid State id"));
        return;
      }
      next(error);
    }
  },

  getAllCountry: async (req, res, next) => {
    try {
      const results = await CountrySchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewCountry: async (req, res, next) => {
    try {
      const newCountry = new CountrySchema({ ...req.body });
      const results = await newCountry.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateCountry: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await CountrySchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Country does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Country Id"));
      }
      next(error);
    }
  },
  deleteCountry: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await CountrySchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Country does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Country id"));
        return;
      }
      next(error);
    }
  },

  getAllCity: async (req, res, next) => {
    try {
      const results = await CitySchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  getAllCityByState: async (req, res, next) => {
    const stateId = req.params.id;
    if (stateId === null || stateId === "" || stateId === undefined) {
      next(createError(400, "State Id is missing"));
      return;
    }
    try {
      const results = await CitySchema.find(
        { isActive: true, stateId: stateId },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewCity: async (req, res, next) => {
    try {
      const newCity = new CitySchema({ ...req.body });
      const results = await newCity.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateCity: async (req, res, next) => {
    try {
      const cityId = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await CitySchema.findByIdAndUpdate(
        cityId,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "City does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid City Id"));
      }
      next(error);
    }
  },
  deleteCity: async (req, res, next) => {
    const cityId = req.params.id;
    if (cityId === null || cityId === undefined || cityId === "") {
      next(createError(400, "Bad Request, City Id is missing"));
      return;
    }
    try {
      const result = await CitySchema.findByIdAndDelete(cityId);
      if (!result) {
        throw createError(404, "City does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid City id"));
        return;
      }
      next(error);
    }
  },

  getAllNationality: async (req, res, next) => {
    try {
      const results = await NationalitySchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewNationality: async (req, res, next) => {
    try {
      const newNationality = new NationalitySchema({ ...req.body });
      const results = await newNationality.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateNationality: async (req, res, next) => {
    try {
      const nationalityId = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await NationalitySchema.findByIdAndUpdate(
        nationalityId,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Nationality does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Nationality Id"));
      }
      next(error);
    }
  },
  deleteNationality: async (req, res, next) => {
    const nationalityId = req.params.id;
    if (
      nationalityId === null ||
      nationalityId === undefined ||
      nationalityId === ""
    ) {
      next(createError(400, "Bad Request, Nationality Id is missing"));
      return;
    }
    try {
      const result = await NationalitySchema.findByIdAndDelete(nationalityId);
      if (!result) {
        throw createError(404, "Nationality does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Nationality id"));
        return;
      }
      next(error);
    }
  },

  getAllIdentityType: async (req, res, next) => {
    try {
      const results = await IdentityTypeSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewIdentityType: async (req, res, next) => {
    try {
      const newIdentityType = new IdentityTypeSchema({ ...req.body });
      const results = await newIdentityType.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateIdentityType: async (req, res, next) => {
    try {
      const identityTypeId = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await IdentityTypeSchema.findByIdAndUpdate(
        identityTypeId,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Identity Type does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Identity Type Id"));
      }
      next(error);
    }
  },
  deleteIdentityType: async (req, res, next) => {
    const identityTypeId = req.params.id;
    if (
      identityTypeId === null ||
      identityTypeId === undefined ||
      identityTypeId === ""
    ) {
      next(createError(400, "Bad Request, Identity Type Id is missing"));
      return;
    }
    try {
      const result = await IdentityTypeSchema.findByIdAndDelete(identityTypeId);
      if (!result) {
        throw createError(404, "Identity Type does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Identity Type id"));
        return;
      }
      next(error);
    }
  },

  getAllPatientType: async (req, res, next) => {
    try {
      const results = await PatientTypeSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewPatientType: async (req, res, next) => {
    try {
      const newPatientTpye = new PatientTypeSchema({ ...req.body });
      const results = await newPatientTpye.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updatePatientType: async (req, res, next) => {
    try {
      const patientTypeId = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await PatientTypeSchema.findByIdAndUpdate(
        patientTypeId,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Patient Type does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Patient Type Id"));
      }
      next(error);
    }
  },
  deletePatientType: async (req, res, next) => {
    const patientTypeId = req.params.id;
    if (
      patientTypeId === null ||
      patientTypeId === undefined ||
      patientTypeId === ""
    ) {
      next(createError(400, "Bad Request, Patient Type Id is missing"));
      return;
    }
    try {
      const result = await PatientTypeSchema.findByIdAndDelete(patientTypeId);
      if (!result) {
        throw createError(404, "Patient Type does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Patient Type id"));
        return;
      }
      next(error);
    }
  },

  getAllPatientCategory: async (req, res, next) => {
    try {
      const results = await PatientCategorySchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewPatientCategory: async (req, res, next) => {
    try {
      const newPatientCategory = new PatientCategorySchema({ ...req.body });
      const results = await newPatientCategory.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updatePatientCategory: async (req, res, next) => {
    try {
      const patientCategoryId = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await PatientCategorySchema.findByIdAndUpdate(
        patientCategoryId,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Patient Category does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Patient Category Id"));
      }
      next(error);
    }
  },
  deletePatientCategory: async (req, res, next) => {
    const patientCategoryId = req.params.id;
    if (
      patientCategoryId === null ||
      patientCategoryId === undefined ||
      patientCategoryId === ""
    ) {
      next(createError(400, "Bad Request, Patient Category Id is missing"));
      return;
    }
    try {
      const result = await PatientCategorySchema.findByIdAndDelete(
        patientCategoryId
      );
      if (!result) {
        throw createError(404, "Patient Category does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Patient Category id"));
        return;
      }
      next(error);
    }
  },

  getAllReligion: async (req, res, next) => {
    try {
      const results = await ReligionSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewReligion: async (req, res, next) => {
    try {
      const newReligion = new ReligionSchema({ ...req.body });
      const results = await newReligion.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateReligion: async (req, res, next) => {
    try {
      const religionId = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await ReligionSchema.findByIdAndUpdate(
        religionId,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Religion does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Religion Id"));
      }
      next(error);
    }
  },
  deleteReligion: async (req, res, next) => {
    const religionId = req.params.id;
    if (religionId === null || religionId === undefined || religionId === "") {
      next(createError(400, "Bad Request, Religion Id is missing"));
      return;
    }
    try {
      const result = await ReligionSchema.findByIdAndDelete(religionId);
      if (!result) {
        throw createError(404, "Religion does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Religion id"));
        return;
      }
      next(error);
    }
  },

  getAllBanks: async (req, res, next) => {
    try {
      const results = await BankSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewBank: async (req, res, next) => {
    try {
      const newBank = new BankSchema({ ...req.body });
      const results = await newBank.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateBank: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await BankSchema.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, "Bank does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Bank Id"));
      }
      next(error);
    }
  },
  deleteBank: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await BankSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Bank does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Bank id"));
        return;
      }
      next(error);
    }
  },

  getAllPaymentType: async (req, res, next) => {
    try {
      const results = await PaymentTypeSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewPaymentType: async (req, res, next) => {
    try {
      const newPaymentType = new PaymentTypeSchema({ ...req.body });
      const results = await newPaymentType.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updatePaymentType: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await PaymentTypeSchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Payment Type does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Payment Type Id"));
      }
      next(error);
    }
  },
  deletePaymentType: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await PaymentTypeSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Payment Type does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Payment Type id"));
        return;
      }
      next(error);
    }
  },

  getAllDocSpeciality: async (req, res, next) => {
    try {
      const results = await DocSpecialitySchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewDocSpeciality: async (req, res, next) => {
    try {
      const newDocSpeciality = new DocSpecialitySchema({ ...req.body });
      const results = await newDocSpeciality.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateDocSpeciality: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await DocSpecialitySchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Doctor Speciality does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Doctor Speciality Id"));
      }
      next(error);
    }
  },
  deleteDocSpeciality: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await DocSpecialitySchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Doctor Speciality does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Doctor Speciality id"));
        return;
      }
      next(error);
    }
  },

  getAllDocDegree: async (req, res, next) => {
    try {
      const results = await DocDegreeSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewDocDegree: async (req, res, next) => {
    try {
      const newDocDegree = new DocDegreeSchema({ ...req.body });
      const results = await newDocDegree.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateDocDegree: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await DocDegreeSchema.findByIdAndUpdate(
        id,
        updates,
        options
      );
      if (!result) {
        throw createError(404, "Doctor Degree does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Doctor Degree Id"));
      }
      next(error);
    }
  },
  deleteDocDegree: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await DocDegreeSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Doctor Degree does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Doctor Degree id"));
        return;
      }
      next(error);
    }
  },

  getAllDoctor: async (req, res, next) => {
    try {
      const results = await DoctorSchema.find(
        { isActive: true },
        { __v: 0, isActive: 0 }
      );
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  saveNewDoctor: async (req, res, next) => {
    try {
      const newDoctor = new DoctorSchema({ ...req.body });
      const results = await newDoctor.save();
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
  updateDoctor: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await DoctorSchema.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, "Doctor does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid Doctor Id"));
      }
      next(error);
    }
  },
  deleteDoctor: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await DoctorSchema.findByIdAndDelete(id);
      if (!result) {
        throw createError(404, "Doctor does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid Doctor id"));
        return;
      }
      next(error);
    }
  },
};
