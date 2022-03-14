const express = require("express");
const Savings = require("../models/savingsAccount.model.js");

const router = express.Router();

// POST DATA into Savings Account...s
router.post("", async (req, res) => {
  try {
    const savings = await Savings.create(req.body);
    return res.status(200).send(savings);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

// // Getting the data
// router.get("", async (req, res) => {
//   try {
//     const savings = await Savings.find().lean().exec();
//     return res.status(200).send(savings);
//   } catch (error) {
//     return res.status(500).send({ message: error.message });
//   }
// });

module.exports = router;
