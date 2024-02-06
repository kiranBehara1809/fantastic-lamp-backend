const createError = require("http-errors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const loggedInToken = require("../Models/loggedInToken.model");
const User = require("../Models/OurUsers.model");
const { refreshTokenLogic, loginLogic } = require("../Core/Auth.Core");
const jwt = require("jsonwebtoken");

module.exports = {
  loginUser: async (req, res, next) => {
    const userName = req.body.userName || null;
    const password = req.body.password || null;
    try {
      if (userName === null) {
        next(createError(400, "User Name is missing"));
        return;
      }
      if (password === null) {
        next(createError(400, "Password is missing"));
        return;
      }
      const user = await User.findOne({ userName: userName });
      if (!user) {
        throw createError(404, "User does not exist.");
      } else {
        loginLogic(req, res, next, user);
      }
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid User Name"));
        return;
      }
      next(error);
    }
  },

  refreshToken: async (req, res, next) => {
    const refreshToken = req.body.token;
    if (refreshToken === null || refreshToken === undefined) {
      next(createError(401, "Token is required"));
      return;
    }
    try {
      const results = await loggedInToken.find({ token: refreshToken });
      if (results && results.length === 0) {
        next(createError(403, "Token Expired"));
        return;
      } else {
        jwt.verify(
          refreshToken,
          process.env.REFRESH_TOKEN_S_KEY,
          (err, user) => {
            if (err) {
              next(createError(403, "Token Expired"));
              return;
            } else {
              refreshTokenLogic(req, res, next, user);
            }
          }
        );
      }
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },

  logout: async (req, res, next) => {
    const refreshToken = req.body.token;
    if (refreshToken === null || refreshToken === undefined) {
      next(createError(400, "Token is required"));
      return;
    }
    try {
      const result = await loggedInToken.findOneAndDelete({
        token: refreshToken,
      });
      if (!result) {
        throw createError(400, "Invalid Token");
      }
      res.send({ msg: "logout successful" });
    } catch (error) {
      console.log(error.message);
      next(createError(500, error.message));
    }
  },
};
