import express from "express"; // import for asynchronous // require for synchronus working
import cors from "cors"; // provide security mean Example - Ghar kay ander sbko allow mat kro jinko allow(Whitelist) kya ha sirf unko hi allow kro
import cookieParser from "cookie-parser"; // npm i cookie-parser cors

// middleware - bech main checking krta hai like userid and password shi h ya nhi

const app = express()

// app.use() It is used for only Middleware
app.use(cors( {
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser()) // server sai user kay browser ki cookie ko access bhi kr paau aur usay set(edit) bhi kr paau via CRUD operation

export { app }