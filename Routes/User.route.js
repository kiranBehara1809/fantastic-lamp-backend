const express = require("express");
const router = express.Router();

const UserController = require("../Controllers/User.Controller");

//Get a list of all users
router.get("/all", UserController.getAllUsers);

//Create a new user
router.post("/save", UserController.createNewUser);

//Get a user by id
router.get("/all/:id", UserController.findUserById);

//Update a user by id
router.post("/update/:id", UserController.updateUser);

//Delete a user by id
router.post("/delete/:id", UserController.deleteUser);

router.get("/roles/all", UserController.getAllUserRoles);


module.exports = router;
