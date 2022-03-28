//nodemon server.js
const express = require("express");
const app = express();

// making controllers
const todoController = require("./controllers/todo.controller");
const userController = require("./controllers/user.controller");
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller.js");

app.use(express.json());

app.use("/todos", todoController);
app.use("/user", userController);
app.use("/register", registerController);
app.use("/login", loginController);


module.exports = app;
