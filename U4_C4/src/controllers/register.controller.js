const express = require("express");

const router = express.Router();
const { body, validationResult } = require("express-validator");
const upload = require("../middleware/upload");

const User = require("../models/user.model");

router.post(
  "",
  body("firstName ")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("Enter your name")
    .isLength({ min: 3, max: 30 })
    .withMessage("FirstName should be betwn 3 - 30"),

  body("lastName ")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Enter your last name")
    .isLength({ min: 3, max: 30 })
    .withMessage("lastName should be betwn 3 - 30"),

  body("email ")
    .isEmail()
    .withMessage("invalid Email")
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error("email exists");
      }
      return true;
    }),
  body("password ")
    .not()
    .isEmpty()
    .withMessage("passsword req")
    .isLength({ min: 10 })
    .withMessage("length must be proper")
    .custom(async (value) => {
      const passw =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,1024}$/;
      if (!value.match(passw)) {
        throw new Error("passwrod exists");
      }
      return true;
    })
);

module.exports = router;
