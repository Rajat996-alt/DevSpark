const express = require("express");

const app = express();
const { adminAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent successfully");
});

app.delete("/admin/delete", (req, res) => {
  res.send("Data is deleted");
});

app.listen(3000, () => {
  console.log("Server is successfully listening to port 3000...");
});
