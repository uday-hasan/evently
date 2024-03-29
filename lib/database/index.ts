import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDB = async () => {
  if (cached.conn) {
    console.log("error in line 9");
    return cached.conn;
  }

  if (!MONGO_URL) {
    console.log("error in line 14");
    throw new Error("Connection url missing");
  }

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URL, {
      dbName: "Evently",
      bufferCommands: false,
    });

  cached.conn = cached.promise;
  console.log("connection cached");
  return cached.conn;
};
