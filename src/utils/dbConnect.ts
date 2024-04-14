import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    mongoose.connection.on("connected", () => console.log("connected"));
  } catch (error) {
    console.log("Some error occured");
  }
};
