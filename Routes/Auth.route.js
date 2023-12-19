const express = require("express");
const router = express.Router();

const AuthController = require("../Controllers/Auth.Controller");


//login a user
router.post("/login", AuthController.loginUser);


module.exports = router;
