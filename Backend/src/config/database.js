import mongoose from "mongoose";
import { config } from "./config.js";

const connectToDatabase = async () => {
  try {
    const connectionInstance = await mongoose.connect(config.MONGO_URI);
    console.log(`MongoDB Connected: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
