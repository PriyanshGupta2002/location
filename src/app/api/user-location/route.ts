import User from "@/models/user.model";
import { connectToDb } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  await connectToDb();

  try {
    const { latitude, longitude } = await req.json();
    const newUserLocation = new User({
      latitude,
      longitude,
    });
    await newUserLocation.save();
    return NextResponse.json({ message: "Successfully done" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Some error occured" }, { status: 500 });
  }
};
