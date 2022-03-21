// For data upl
const express = require("express");
// const { response } = require("../..");
const User = require("../models/user.model");

const upload = require("../middleware/upload");
const router = express.Router();

// for getting res
router.get("", async (req, response) => {
  try {
    const user = await User.find().lean().exec();
    return response.status(200).send(user);
  } catch (error) {
    return response.send(500).send({ message: error.message });
  }
});

// creating user
router.post("", upload.single("profileImages"), async (req, res) => {
  try {
    const user = await User.create({
      firstName: req.body.firstName,
      profileImages: req.file.path,
    });
    return res.status(200).send(user);
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
});


module.exports = router;
