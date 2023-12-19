const bcrypt = require("bcrypt");
const createError = require("http-errors");


module.exports = {
  checkPasswordMatch: async (req, res, next, dbUser) => {
    if (await bcrypt.compare(req.body.password, dbUser.password)) {
      res.send({
        user: { ...dbUser._doc, password: null },
        msg: "logged in succesfully",
      });
    } else {
      next(createError(400, "Incorrect Password"));
    }
  },
};
