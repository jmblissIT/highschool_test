import mongoose from "mongoose";

//Defining Schema
const homedescriptionboxSchema = new mongoose.Schema({
    avatar :{type:String},
    cloudinary_id :{type:String},
    title:{type:String, required:true},
    link:{type:String}
})

//Model
const HomeDescriptionModel = mongoose.model("homedescription", homedescriptionboxSchema);

export default HomeDescriptionModel;