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
import {app} from './app.js'


connectDB().then(()=> {
    app.listen(process.env.PORT || 8080, ()=> {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=> {
    console.log("mongo db connection Failed !!! ", err);
})

















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