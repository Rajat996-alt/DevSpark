const express = require("express");

const app = express();

app.use("/name", (req, res) => {
  res.send("My name is Rajat!");
});

app.use("/hello", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(3000, () => {
  console.log("Server is successfully listening to port 3000...");
});
