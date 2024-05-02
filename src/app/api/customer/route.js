import { connectionStr } from "@/lib/db";
import { resturentSchema } from "@/lib/resturentModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// search bar py location or resturent ka name lekh seacrh krny ki api ha ya jis ko hum 
// gui k attache kr k show kra skty he 

export async function GET(request){
    let queryParams= request.nextUrl.searchParams;
    console.log(queryParams.get("location"));
    let filter={};
    if(queryParams.get("location")){
        let city =queryParams.get("location");
        filter={city:{$regex: new RegExp(city,'i')}}
    }else if(queryParams.get("restaurant")){
        let name =queryParams.get("restaurant");
        filter={name:{$regex: new RegExp(name,'i')}}
    }
    await mongoose.connect(connectionStr)
    let result = await resturentSchema.find(filter);
    return NextResponse.json({success:true,result})
}