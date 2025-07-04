import mongoose, { connect } from 'mongoose';
import { DB_NAME } from '../constants.js';

// This is an async arrow function stored in a variable named connectDB.
const connectDB = async () => {
  try {
  // Here, we are awaiting the mongoose.connect() call and storing its result in 'connection'.
  // This allows us to access connection details (like host) for logging or debugging.
  // In some other implementations, you might see just 'await mongoose.connect(...)' without storing the result,
  // which means you can't easily log connection info.
  const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

  // Logging the host of the connected database for better visibility and debugging.
  // This is possible because we stored the result of mongoose.connect above.
  console.log("Database connection successful:", { host: connection.connection.host });
  } catch (error) {
    console.error("Database connection error:", error);
    // throw error;  we can write this also but ode have process feature too
    process.exit(1); // Exit the process with a failure code if the connection fails
    // Instead of 'throw error', we use 'process.exit(1)' to immediately terminate the process on DB connection failure.
    // 'throw error' would propagate the error up the call stack, while 'process.exit(1)' stops the Node.js process entirely.
  }
};

export default connectDB;
