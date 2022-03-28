const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// passwrd hashing k
userSchema.pre("save", function (next) {
  const hash = bcrypt.hashSync(this.password, 6); ///6 rounds of encription creates...
  this.password = hash;
  return next();
});

// to check passwd
userSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("user", userSchema);
