import mongoose  from "mongoose";

const resturentModel = new mongoose.Schema({
    name:String,
});

export const resturentSchema = mongoose.models.resturannts || 
mongoose.model("resturannts",resturentModel)