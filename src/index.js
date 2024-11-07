// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
// import express from "express";
// const app = express()



connectDB()


/*
;( async ()=> {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`);
        app.on("error", (error)=> { // express don't listion problem detect error 
            console.log("ERR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listining on PORT: ${process.env.PORT}`);
        })
    } catch(error){
        console.error("ERROR: ", error)
        throw err
    }
})() // imediately execute(IFEE)
*/