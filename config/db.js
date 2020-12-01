const mongoose = require("mongoose");
const config = require("config");
const DB = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO DB");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
