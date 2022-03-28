const express = require("express");
const client = require("../configs/db");

const Todo = require("../models/todo.model");
const User = require("../models/user.model");
const router = express.Router();

// logged in user to create a todo
router.post("", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    const todos = await Todo.find().lean().exec();
    client.set("todos", JSON.stringify(todos));
    return res.status(201).send(todo);
  } catch (error) {
    return res.status(500).send({ Error: error });
  }
});

// that returns all todos of the logged in user
// GET REQUEST
router.get("", async (req, res) => {
  try {
    client.get("todos", async function (error, getTodo) {
      if (getTodo) {
        const todos = JSON.parse(getTodo);
        return res.status(200).send({ todos });
      } else {
        try {
          const todos = await Todo.findById(req.params.id).lean().exec();
          client.set(`todos.${req.params.id}`, JSON.stringify(todo));
          return res.status(200).send({ todos });
        } catch (error) {
          return res.status(401).send(todo);
        }
      }
    });
    return res.status(201).send(todo);
  } catch (error) {
    //   throw an error with status code 401
    return res.status(401).send({ Error: error });
  }
});

// where if the todo user is same as logged in user then it shows the todo else it will throw an error with status code 401
// GET REQUEST BY ID.
router.get("/:id", async (req, res) => {
  try {
    client.get(`todos.${req.params.id}`, async function (error, getTodo) {
      if (getTodo) {
        const todos = JSON.parse(getTodo);
        return res.status(200).send({ todos });
      } else {
        try {
          const todo = await Todo.findById(req.params.id).lean().exec();
          client.set(`todos.${req.params.id}`, JSON.stringify(todo));
          return res.status(200).send({ todo });
        } catch (error) {
          return res.status(401).send(todo);
        }
      }
    });
  } catch (error) {
    //   throw an error with status code 401
    return res.status(401).send({ Error: error });
  }
});

// where if the todo user is the same as logged in user then user can update the todo else it will throw an error with status code 401
// PATCH / UPDATE REQUEST
router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    const todos = await Todo.find().lean().exec();
    client.set(`todos.${req.params.id}`, JSON.stringify(todo));
    client.set("todos", JSON.stringify(todos));
    return res.status(200).send(todo);
  } catch (error) {
    //   throw an error with status code 401
    return res.status(401).send({ Error: error });
  }
});

// where if the todo user is the same as logged in user then user can delete the todo else it will throw an error with status code 401
// Delete TODO requets by id
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id).lean().exec();
    const todos = await Todo.find().lean().exec();
    client.del(`todos.${req.params.id}`);
    client.set("todos", JSON.stringify(todos));
    return res.status(200).send(todo);
  } catch (error) {
    //   throw an error with status code 401
    return res.status(401).send({ Error: error });
  }
});

module.exports = router;
