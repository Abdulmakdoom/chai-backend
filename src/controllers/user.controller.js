import { asyncHandler } from "../utils/asyncHandler.js";
// import {ApiError} from "../utils/ApiError.js"
// import { User} from "../models/user.model.js"
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
// import { ApiResponse } from "../utils/ApiResponse.js";
// import jwt from "jsonwebtoken"
// import mongoose from "mongoose";


const registerUser = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

export {registerUser}