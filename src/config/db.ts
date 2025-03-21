import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Explicitly load .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

console.log("Loaded MONGO_URI:", process.env.MONGO_URI); // Debugging Line

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error("MONGO_URI is not defined in .env file");
        }
        await mongoose.connect(uri);
        console.log("Database is connected...");
    } catch (error) {
        console.error("Error in DB connection:", error);
    }
};

export { connectDB };
