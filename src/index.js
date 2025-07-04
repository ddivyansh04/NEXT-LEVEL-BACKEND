/*
import mongoose from "mongoose";

import DB_NAME from "./constants.js"; //importing the database name from constants.js

import express from "express"; // Importing express to create an Express application

const app=express();

/**
 * Immediately Invoked Async Function Expression (IIFE) to connect to MongoDB using Mongoose.
 * This function runs automatically when the file is loaded. It uses the `async` keyword,
 * which allows us to use `await` inside the function. The `async` keyword makes the function
 * return a promise and lets us write asynchronous code that looks like regular, step-by-step code.
 * The `await` keyword tells JavaScript to wait for the database connection to finish before moving
 * to the next line. This makes it easier to handle database connections and errors, without using
 * complicated callbacks or `.then()` chains.
 * If the connection is successful, the program continues. If there is an error, it is caught and logged.
 */

/*
(async () => {
    try {
        // Connect to MongoDB using mongoose, with the URI and database name from environment and constants
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`); // 'await' pauses here until the connection is done

        app.on('error', (err) => {
            //It holds the error object/message
            // Log any errors that occur during the connection
            console.error('error:', err);
            throw err; // Throw the error to stop the application if the connection fails
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (error) {
        // Log any errors that occur during the connection
        console.error('ERROR:', error);
    }
})();
*/


//Let's try another approach in which we will not write every thing in the same file we will create a separate file for the database connection and import it here



//second approach





// require("dotenv").config({ path: "./.env" }); //as out type is module we have to use import instead of require
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

//this line tell node.js that "Read all the variables inside my .env file and load them into process.env so I can use them in my code."




import connectDB from "./db/index.js"; // Importing the connectDB function from the db module
import express from "express"; // Importing express to create an Express application
import mongoose, { connect } from "mongoose"; // Importing mongoose to interact with MongoDB
connectDB(); // Call the connectDB function to establish the database connection when this module is loaded.    
