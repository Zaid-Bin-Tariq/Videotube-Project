import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { MONGODB_URI, PORT } from "../../config.js";


const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MOngoDB Connection Error: ", error);
    process.exit(1);
  }
};
export default connectDB
