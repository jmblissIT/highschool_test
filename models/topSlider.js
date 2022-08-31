import mongoose from "mongoose";

//Defining Schema
const topsliderSchema = new mongoose.Schema({
    date:{type:String, required:true},
    // image1:{type:String, required:true},
    // image2:{type:String, required:true},
    title1:{type:String, required:true},
    title2:{type:String, required:true},
    score1:{type:Number, required:true},
    score2:{type:Number, required:true}
})

//Model
const TopSliderModel = mongoose.model("topslider", topsliderSchema);

export default TopSliderModel;