import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined");
    }

    mongoose.connection.on("connected", () =>
      console.log("MongoDB connected")
    );

    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log("Error Connecting to MongoDB:", error);
  }
};

export default connectDB;