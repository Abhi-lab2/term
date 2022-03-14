const mongoose = require("mongoose");

const fixedAccountSchema = new mongoose.Schema(
  {
    account_number: { type: String, required: true, unique: true },
    balance: { type: String, required: true },
    interestRate: { type: String, required: true },
    startDate: { type: String, required: true },
    maturityDate: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const fixedAccount = mongoose.model("fixedaccount", fixedAccountSchema);

module.exports = fixedAccount;
