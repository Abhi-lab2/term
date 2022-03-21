const app = require("./index");
const connnect = require("./src/configs/db");

app.listen(5006, async () => {
  try {
    await connnect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err);
  }
});
