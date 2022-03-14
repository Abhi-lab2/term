const mongoose = require("mongoose");

const masterAccountSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref : "User", required: true },
    balance: { type: Number, required: true },
    branchId: { type: mongoose.Schema.Types.ObjectId, ref : "User", required: false },
    managerId: { type: mongoose.Schema.Types.ObjectId, ref : "Branch", required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const MasterAccount = mongoose.model("masteraccount", masterAccountSchema);

module.exports = MasterAccount;
