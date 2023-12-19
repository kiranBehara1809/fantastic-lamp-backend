const createError = require("http-errors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const User = require("../Models/User.model");
const { checkPasswordMatch } = require("../Core/Auth.Core");

module.exports = {
  loginUserold: async () => {
    await getAuthUserByUserName(req, res, next);
  },

 loginUser : async (req, res, next) => {
    const userName = req.body.userName;
    try {
      const user = await User.findOne({ userName: userName });
      if (!user) {
        throw createError(404, "User does not exist.");
      }else{
        checkPasswordMatch(req, res, next, user);
      }
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid User Name"));
        return;
      }
      next(error);
    }
  }
};

