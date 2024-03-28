import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

const cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDB = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGO_URL) throw new Error("Connection url missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGO_URL, {
      dbName: "Evently",
      bufferCommands: false,
    });

  cached.conn = cached.promise;

  return cached.conn;
};
