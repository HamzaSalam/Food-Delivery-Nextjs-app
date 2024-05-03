import { connectionStr } from "@/lib/db";
import { foodSchema } from "@/lib/foodModel";
import { resturentSchema } from "@/lib/resturentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content){

    const id = content.params.id;
    console.log(id);

    await mongoose.connect(connectionStr)
    const details=await resturentSchema.findOne({_id:id})
    const foodItems=await foodSchema.find({resto_id:id})


    return NextResponse.json({success:true,details,foodItems})

}