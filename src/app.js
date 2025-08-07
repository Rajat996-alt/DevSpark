const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();
const { validateSignupData } = require("./utils/validate");
const bcrypt = require("bcrypt");

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
    //Validate the data
    validateSignupData(req);

    //Encrypt the password
    const { firstName, lastName, emailId, password } = req.body;

    const pswrdHash = await bcrypt.hash(password, 10);
    console.log(pswrdHash);

    //Creating a new instance of the User model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: pswrdHash,
    });

    await user.save();
    res.send("User added successfully...");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("emal");
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (isPassword) {
      res.send("Login successful!!!");
    } else {
      throw new Error("paswrod ");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

// Feed API - GET /feed - to get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(404).send("Something went wrong");
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete({ _id: userId });
    //const user = await User.findByIdAndDelete(userId);
    res.send("User deleted successfully");
  } catch (err) {
    res.status(404).send("Something went wrong!");
  }
});

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["photoUrl", "age", "gender", "about", "skills"];

    const isAllowedUpdates = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );

    if (!isAllowedUpdates) {
      throw new Error("Update not allowed!");
    }

    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    console.log(user);
    res.send("User updated successfully!");
  } catch (err) {
    res.status(404).send("Update failed: " + err.message);
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
