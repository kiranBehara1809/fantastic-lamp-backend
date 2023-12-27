const bcrypt = require("bcrypt");
const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const loggedInToken = require("../Models/loggedInToken.model");

module.exports = {
  loginLogic: async (req, res, next, dbUser) => {
    try {
      if (await bcrypt.compare(req.body.password, dbUser.password)) {
        const accessToken = generateAccessToken({
          ...dbUser._doc,
          password: null,
        });
        const refreshToken = jwt.sign(
          { ...dbUser._doc, password: null },
          process.env.REFRESH_TOKEN_S_KEY
        );
        const loggedInTokenSchema = new loggedInToken({
          userName: dbUser.userName,
          userId: dbUser._id,
          token: refreshToken,
        });
        const result = await loggedInTokenSchema.save();
        res.send({
          accessToken: accessToken,
          refreshToken: refreshToken,
          msg: "logged in succesfully",
        });
      } else {
        next(createError(400, "Incorrect Password"));
      }
    } catch (e) {
      console.log("Error while matching password --> ", e);
      next(createError(500, "Internal Server Error"));
    }
  },

  refreshTokenLogic: (req, res, next, user) => {
    const {
      _id,
      firstName,
      lastName,
      middleName,
      userName,
      password,
      age,
      isActive,
      __v,
    } = user;
    const newAccessToken = generateAccessToken({
      _id,
      firstName,
      lastName,
      middleName,
      userName,
      password,
      age,
      isActive,
      __v,
    });
    res.json({ accessToken: newAccessToken });
  },
  
};

const generateAccessToken = (obj) => {
  return jwt.sign(obj, process.env.ACCESS_TOKEN_S_KEY, {
    expiresIn: '15m',
  });
};
