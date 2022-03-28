//nodemon server.js
const express = require("express");
const app = express();

// making controllers
const todoController = require("./controllers/todo.controller");
const userController = require("./controllers/user.controller");

app.use(express.json());

app.use("/todos", todoController);
app.use("/user", userController);

module.exports = app;
