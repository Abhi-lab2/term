const express = require("express");

const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model");

router.post(
  "",
  body("email ").isEmail().withMessage("invalid Email"),
  body("password  ").isEmail().withMessage("Worng password ")
  
);
