const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.post("/signup", async (req, res) => {
  //Creating a new instance with the help of User model
  const user = new User({
    firstName: "Virat",
    lastName: "Kohli",
    emaiId: "virat@kohli.com",
    password: "virat@1123",
    age: "36",
    gender: "Male",
  });

  try {
    await user.save();
    res.send("User added successfully...");
  } catch (err) {
    res.send(err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established...");
    app.listen(3000, () => {
      console.log("Server is successfully listening to port 3000...");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });
