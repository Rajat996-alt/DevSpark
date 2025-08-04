const express = require("express");

const app = express();

app.get(/a/, (req, res) => {
  res.send("I am the new user.");
});

app.post("/user/:userId/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Rajat", lastName: "Sen" });
});

app.delete("/user", (req, res) => {
  res.send("Deleted successfully");
});

app.use("/test", (req, res) => {
  res.send("Home page!");
});

app.listen(3000, () => {
  console.log("Server is successfully listening to port 3000...");
});
