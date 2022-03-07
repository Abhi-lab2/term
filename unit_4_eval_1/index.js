const express = require("express");
const app = express();
app.use(logger);

//Books data...
const booksData = (req, res, next) => {
  req.name = req.param.name;
  console.log("Fetching Data for Books");
  next();
};

app.get("/books", booksData, (req, res) => {
  const data = require("./books.json");
  res.send(data);
  return res.send({ route: "/books" });
});

//Libraries
const librariesData = (req, res, next) => {
  req.librariesData = req.param.librariesData;
  console.log("Librarians");
  next();
};

app.get("/libraries", checkPermission(librariesData), (req, res) => {
  const data = require("./libraries.json");
  res.send(data);
  return res.send({ route: "/libraries", permission: true });
});

//Authors..
app.get("/authors", librariesData, (req, res) => {
  const data = require("./libraries.json");
  res.send(data);
  return res.send({ route: "/authors", permission: true });
});

function checkPermission(permit) {
  return function logger(req, res, next) {
    if (authors == "book") {
      return next();
    }
    return res.send("Searching for Book");
  };
}
function logger(req, res, next) {
  console.log("before logger - route handler");
  next();
  console.log("after logger - route handler");
}

app.listen(6600, () => {
  console.log("Listening port 6600");
});
