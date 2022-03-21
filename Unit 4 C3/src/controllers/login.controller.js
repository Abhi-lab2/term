const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const User = require("../models/user.model.js");

const upload = require("../middlewares/upload.js");

router.post(
  "",
  body("email").isEmail().bail().withMessage("Email is invalid"),

  body("password").not().isEmpty().bail().withMessage("Password is required"),

  async (req, response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email: email });

      if (!user) {
        return response.status(500).send({ error: "Wrong Email or Password" });
      }

      if (user.password == password) {
        return response.status(200).send("User signin successfull!");
      } else {
        return response.status(500).send({ error: "Wrong Email or Password" });
      }
    } catch (err) {
      return response.status(500).send(err.message);
    }
  }
);

module.exports = router;
