import mongoose from "mongoose";

//Defining Schema
const middlesliderSchema = new mongoose.Schema({
    avatar :{type:String},
    cloudinary_id :{type:String}
})

//Model
const MidSliderModel = mongoose.model("middleslider", middlesliderSchema);

export default MidSliderModel;