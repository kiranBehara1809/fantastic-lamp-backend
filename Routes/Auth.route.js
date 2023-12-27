const express = require("express");
const router = express.Router();

const AuthController = require("../Controllers/Auth.Controller");


//login a user
router.post("/login", AuthController.loginUser);

// creating a new access from refresh token
router.post("/token", AuthController.refreshToken);

router.post("/logout", AuthController.logout);


module.exports = router;
