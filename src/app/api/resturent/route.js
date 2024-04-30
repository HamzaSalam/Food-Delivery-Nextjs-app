
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

export async function POST(request){
    let payload = await request.json()
    await mongoose.connect(connectionStr)
    const resturent = new resturentSchema(payload)
    const result = await resturent.save()
    return NextResponse.json({result,success:true})
}