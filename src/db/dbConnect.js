// dbConnect.js
// This file will handle the connection to the MongoDB database using Mongoose.
// You can import and use this function in your main index.js file.

import mongoose from "mongoose";
import DB_NAME from "../constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

export default connectDB;
