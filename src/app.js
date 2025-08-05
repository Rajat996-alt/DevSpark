const express = require("express");

const app = express();

app.use(
  "/user",
  (req, res, next) => {
    //Route handler
    console.log("1st response handler!");
    //res.send("1st response!");
    next();
  },
  (req, res, next) => {
    console.log("2nd response handler!");
    //res.send("2nd response!");
    next();
  },
  (req, res, next) => {
    console.log("3rd response handler!");
    //res.send("3rd response!");
    next();
  },
  (req, res, next) => {
    console.log("4th response handler!");
    //res.send("4th response!");
    next();
  },
  (req, res, next) => {
    console.log("5th response handler!");
    res.send("5th response!");
  }
);

app.listen(3000, () => {
  console.log("Server is successfully listening to port 3000...");
});
