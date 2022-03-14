const express = require("express");
const Fixed = require("../models/fixedAccount.model.js");

const router = express.Router();

// POST DATA
router.post("", async (req, res) => {
  try {
    const fixed = await Fixed.create(req.body);
    return res.status(200).send(fixed);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// Getting the data
router.get("", async (req, res) => {
  try {
    const fixed = await Fixed.find().lean().exec();
    return res.status(200).send(fixed);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
