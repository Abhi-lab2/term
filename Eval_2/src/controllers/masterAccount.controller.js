const express = require("express");
const Master = require("../models/masterAccount.model.js");

const router = express.Router();

// POST DATA
router.post("", async (req, res) => {
  try {
    const master = await Master.create(req.body);
    return res.status(200).send(master);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// Getting the data
router.get("", async (req, res) => {
  try {
    const master = await Master.find().lean().exec();
    return res.status(200).send(master);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
