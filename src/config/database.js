const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://rajatsen:B8Kydv9VIY6rTM6U@namastenode.vswt5ov.mongodb.net/DevSpark"
  );
};

module.exports = connectDB;
