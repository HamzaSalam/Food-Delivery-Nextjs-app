
import { connectionStr } from "@/lib/db";
import { resturentSchema } from "@/lib/resturentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    const data = await resturentSchema.find()
    console.log(data)
    return NextResponse.json({result:data})
}