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
    if (cityId === null || cityId === undefined || cityId === ""){
      next(createError(400, "Bad Request, City Id is missing"))
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
};
