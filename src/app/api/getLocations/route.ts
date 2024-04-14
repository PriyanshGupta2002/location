import User from "@/models/user.model";
import { connectToDb } from "@/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  await connectToDb();
  try {
    const user = await User.find();
    return NextResponse.json(
      { message: "Successfully done", data: user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Some error occured" }, { status: 500 });
  }
};
