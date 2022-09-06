import mongoose from "mongoose";

//Defining Schema
const middlesliderSchema = new mongoose.Schema({
    filename:{type:String, required:true}
})

//Model
const MidSliderModel = mongoose.model("middleslider", middlesliderSchema);

export default MidSliderModel;