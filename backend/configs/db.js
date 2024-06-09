import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

const connectDB = expressAsyncHandler(async () => {
  mongoose
    .connect(process.env.DATABASE_CONNECTION_STRING)
    .then(() => console.log("Database connected"));
});

export default connectDB;
