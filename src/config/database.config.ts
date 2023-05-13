import mongoose from "mongoose";

const { MONGODB_URI, MONGODB_LOCAL_URI } = process.env;

export const connectToDatabase = async () => {
  let uri =
    MONGODB_URI || MONGODB_LOCAL_URI || "mongodb://localhost:27017/test";
  try {
    mongoose.set("strictQuery", true);
    const db = await mongoose.connect(uri);
    console.log(`Connected to database: ${db.connection.name}`);
  } catch (error: any) {
    console.log(error.message);
  }
};
