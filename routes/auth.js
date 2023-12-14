const express = require("express");
const router = express.Router();
const User = require("../models/userModel");


router.post("/login", async (req, res) => {
  try {
    const users = await User.find({ userName: req.body.userName });
    if (users?.length > 0) {
      res.json({
        user : users[0],
        statusCode: 200,
        msg: "Login Successful",
      });
    }else{
        res.status(200).json({
          users,
          statusCode: 404,
          msg: "User not Found",
          count:0,
        });
    }
  } catch (e) {
    res.status(500).json({
      users: [],
      statusCode: 500,
      msg: "Internal Server Error",
    });
    console.log("Internal Server Error , Error while Fetching All Users --> ", e);
  }
});

module.exports = router;
