import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        //console.log(connectionInstance);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1) // isko padhna hai // terminates the process with a failure code
    }
}

export default connectDB