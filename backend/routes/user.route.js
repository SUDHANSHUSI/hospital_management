const express = require("express");
const { register } = require("../controller/user/register.controller");
const { login } = require("../controller/user/login.controller");
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = userRouter;