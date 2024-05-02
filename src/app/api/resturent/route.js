
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
    let result;
    let success = false
    await mongoose.connect(connectionStr)
    if(payload.login){
        // use for login
        result = await resturentSchema.findOne({email:payload.email,password:payload.password})
        if(result){
            success = true
        }
    }
    else{
        // use for signup
        const resturent = new resturentSchema(payload)
        result = await resturent.save()
        if(result){
            success = true
        }
    }
    
    
    return NextResponse.json({result,success})
}