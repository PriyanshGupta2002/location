import mongoose from "mongoose";
const { Schema } = mongoose;

const userLocationSchema = new Schema(
  {
    latitude: {
      type: String,
      required: [true, "Latitude is required"],
    }, // String is shorthand for {type: String}
    longitude: {
      type: String,
      required: [true, "Longitude is required"],
    }, // String is shorthand for {type: String}
  },
  { timestamps: true }
);

const User =
  mongoose.models.users || mongoose.model("users", userLocationSchema);

export default User;
