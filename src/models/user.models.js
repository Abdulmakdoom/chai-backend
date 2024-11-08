import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"; // bearer token hai (jo usko bear krta hai bo shi maan leta hai hum (y token jike bhi pass hai, jo bhi mujha bejhega main usko data bajh dunga (is like "Key")))
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, // remove extra space
            index: true // database ki searching main anyy lag jaye (seraching field enable)
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowecase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
        watchHistory: [  // array bcz multiple value add krengy baad main
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }

    },
    {
        timestamps: true
    }
)

// npm i bcrypt (password protected or password encrpted krta hai)
userSchema.pre("save", async function (next) {  // middleware (data save hone say phale password encrpt krde)(arrow function use mat krna )
    if(!this.isModified("password")) return next(); // now this middleware work for only password bcz of this line otherwise if you chnage anywhere then it will again encrpted password 

    this.password = await bcrypt.hash(this.password, 10) //((ish password ko )filter, round)
    next()
})

// before impoet User, check password is correct or not 
//custom method create
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password) //(user enter password(string form), encepted password)  o/p true or false form main
}

// npm install jsonwebtoken
userSchema.methods.generateAccessToken = function(){  // access token 
    return jwt.sign(
        {
            // payload
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){ // Refresh token // async bhi use kr sakte hai
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)