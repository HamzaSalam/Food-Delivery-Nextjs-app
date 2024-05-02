import { connectionStr } from "@/lib/db";
import { resturentSchema } from "@/lib/resturentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
    await mongoose.connect(connectionStr)
    let result = await resturentSchema.find();
    // yahan py jo duplicate value ko aik bar show krana ha or sary string k ohly word k letter ko capitall krna 
    //tak ky duplicate value na a sky 
    result = result.map((item)=>item?.city?.charAt(0).toUpperCase()+ item?.city?.slice(1));

    result = [...new Set(result.map((item)=>item))]
    return NextResponse.json({success:true,result})
}