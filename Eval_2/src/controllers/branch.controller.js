const express = require("express");
const Branch = require("../models/branch.model.js");
const Master = require("../models/masterAccount.model.js");
const Fixed = require("../models/fixedAccount.model.js");

const router = express.Router();

// POST DATA
router.post("", async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    return res.status(200).send(branch);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// Getting the data
router.get("", async (req, res) => {
  try {
    const branch = await Branch.find().lean().exec();
    return res.status(200).send(branch);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// Posting or creeating
router.get("", async (req, res) => {
  try {
    const master = await Master.find().lean().exec();
    return res.status(200).send(master);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

router.post("", async (req, res) => {
  try {
    const fixed = await Fixed.create(req.body);
    return res.status(200).send(fixed);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
