const express = require("express");
const registerUser = require("../controllers/user/user.register");
const loginUser = require("../controllers/user/user.login");
const openRoutes = express.Router();

openRoutes.post("/register", registerUser);
openRoutes.post("/login", loginUser);

module.exports = openRoutes;
