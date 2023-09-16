const mongoose = require("mongoose");
require("dotenv").config();

const dbConnetion = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB connection successful");
  } catch (error) {
    console.log("Error in Db Connection", error);
  }
};

module.exports = dbConnetion;
