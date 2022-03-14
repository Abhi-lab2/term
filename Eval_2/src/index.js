const express = require("express");

const userController = require("./controllers/user.controller.js");
const branchController = require("./controllers/branch.controller.js");
const MasterAccountController = require("./controllers/MasterAccount.controller.js");
const SavingsAccountController = require("./controllers/SavingsAccount.controller.js");
const FixedAccountController = require("./controllers/FixedAccount.controller.js");

const app = express();

app.use(express.json());

app.use("/users", userController);
app.use("/branch", branchController);
app.use("/master", MasterAccountController);
app.use("/savings", SavingsAccountController);
app.use("/fixed", FixedAccountController);

app.listen(6300, async () => {
  try {
    await connect();
    console.log("Connecting Servers");
  } catch (error) {
    console.log("error: ", error);
  }
});

module.exports = app;
