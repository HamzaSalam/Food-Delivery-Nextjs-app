import mongoose  from "mongoose";

const resturentModel = new mongoose.Schema({
    email:String,
    password:String,
    name:String,
    city:String,
    address:String,
    contact:String

});

export const resturentSchema = mongoose.models.resturannts || 
mongoose.model("resturannts",resturentModel)


