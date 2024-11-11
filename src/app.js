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


//routes import  ( userRouter -- apni marzi sai tabhi name day saty hai agar "export default" ho raha ho)
import userRouter from "./routes/user.routes.js"


//routes declaration

//----app.get isly use kr rahay thay kyu ki hum yahi router aur controller likh rahe tha so in this we use app.use bcz router/controller alag alag jgha hai
// ab router ko lany ka liya middleware lana hoga 
app.use("/api/v1/users", userRouter) // ispar jatay hii userRouter ko activate krdo

// http://localhost:8080/api/v1/users/register
export { app } 