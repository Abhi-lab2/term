const mongoose = require("mongoose");

const todoModel = new mongoose.Schema(
  {
    title : { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("todo", todoModel);
