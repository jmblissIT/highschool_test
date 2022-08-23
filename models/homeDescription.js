import mongoose from "mongoose";

//Defining Schema
const homedescriptionboxSchema = new mongoose.Schema({
    image:{type:String, required:true},
    title:{type:String}
})

//Model
const HomeDescriptionModel = mongoose.model("homedescription", homedescriptionboxSchema);

export default HomeDescriptionModel;