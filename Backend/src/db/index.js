import mongoose from "mongoose";
import { DB_NAME } from "../contants";

const ConnectDB  = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MONGODB Connected Successfully !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
        
    }
}

export default ConnectDB