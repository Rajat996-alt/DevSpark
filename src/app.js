const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!");
  }
});

app.get("/getAllData", (req, res) => {
  //try {
  //Logic
  throw new Error("sdfg");
  res.send("User data sent!");
  // } catch (err) {
  //   res.status(500).send("Something went wrong!");
  // }
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong!");
  }
});

app.listen(3000, () => {
  console.log("Server is successfully listening to port 3000...");
});
