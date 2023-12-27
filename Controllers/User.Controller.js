const createError = require("http-errors");
const mongoose = require("mongoose");

const User = require("../Models/User.model");
const { getUniqueUserName, getInitalPassword } = require("../Core/User.Core");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const results = await User.find({}, { __v: 0, password : 0 });
      // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Product.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },

  createNewUser: async (req, res, next) => {
    try {
      const userSchema = new User({
        ...req.body,
        userName: getUniqueUserName(req.body),
        password: await getInitalPassword(req.body)
      });
      const result = await userSchema.save();
      res.send({ ...result, password  : null});
    } catch (error) {
      console.log(error.message);
      if (error.name === "ValidationError") {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }
  },

  getUserByUserName: async (req, res, next) => {
    const userName = req.params.id;
    try {
      const user = await User.findOne({ userName: userName });
      if (!user) {
        throw createError(404, "User does not exist.");
      }
      res.send(user);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid User Name"));
        return;
      }
      next(error);
    }
  },

  findUserById: async (req, res, next) => {
    const id = req.params.id;
    const userName = req.params.userName;
    try {
      const user = await User.findOne({ _id: id });
      if (!user) {
        throw createError(404, "User does not exist.");
      }
      res.send(user);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid User id"));
        return;
      }
      next(error);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await User.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, "User does not exist");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, "Invalid User Id"));
      }
      next(error);
    }
  },

  deleteUser: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await User.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, "User does not exist.");
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid User id"));
        return;
      }
      next(error);
    }
  },
};
