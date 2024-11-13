import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"


const router = Router()

// router.route("/register").post(registerUser)//(post(method))
router.route("/register").post(
    upload.fields([    // fields -- array bajhta hai
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )



export default router