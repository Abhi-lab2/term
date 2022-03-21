const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwt = require("jsonwebtoken");
const { findOne } = require("../models/user.model");

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]

//   if (token == null) return res.sendStatus(401)

//   jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err: null, user: any) => {
//     console.log(err)

//     if (err) return res.sendStatus(403)

//     req.user = user

//     next()
//   })
// }

const authToken = (user) => {
  return jwt.sign({ user }, `${process.env.TOKEN_SECRET}`);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.send(500).send({ message: "Already exists" });
    }
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send(400).send({ message: "Already exists" });
    }
  } catch (error) {
    return res.send(500).send({ message: error.message });
  }
};
module.exports = { register };
