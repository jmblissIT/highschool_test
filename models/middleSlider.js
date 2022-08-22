import mongoose from "mongoose";

//Defining Schema
const middlesliderSchema = new mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String}
})

//Model
const MidSliderModel = mongoose.model("middleslider", middlesliderSchema);

export default MidSliderModel;