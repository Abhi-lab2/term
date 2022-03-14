const express = require("express");

const User = require("../models/user.model.js");
const router = express.Router();

// Getting the data
router.get("", async (res, req) => {
  try {
    const user = await User.find().lean().exec();
    return res.status(200).send.send(user);
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).send({ message: error.message });
  }
});

// Posting or creeating
router.get("", async (res, req) => {
  try {
    const user = await User.create(req.body);
    return res.status(200).send.send(user);
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).send({ message: error.message });
  }
});

module.exports = router;
