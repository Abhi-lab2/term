const app = require("./index.js");
const connect = require("./configs/db.js");

app.listen(6300, async () => {
  try {
    await connect();
  } catch (error) {
    console.log(error);
  }
  console.log("listening to port 6300");
});
