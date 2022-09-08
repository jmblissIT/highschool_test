import TopSliderModel from '../models/topSlider.js';
import MidSliderModel from '../models/middleSlider.js';
import HomeDescriptionModel from '../models/homeDescription.js';
import cloudinary from '../utils/cloudinary.js';


class HomeController {

    static getTopSlide = async (req,res) => {
        try {
            const result = await TopSliderModel.find();
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static getMidSlide = async (req,res) => {
        try {
            const result = await MidSliderModel.find();
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }
    static getHomeDescription = async (req,res) => {
        try {
            const result = await HomeDescriptionModel.find();
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static createTopSlides =  async (req, res) =>{
        try {
            const doc = new TopSliderModel({
                date:req.body.date,
                title1:req.body.title1,
                title2:req.body.title2,
                score1:req.body.score1,
                score2:req.body.score2
            });
            const result = await doc.save();
            res.status(201).send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static getSingleTopById = async (req, res) => {
        try {
            const result = await TopSliderModel.findById(req.params.id);
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static updateTopSlidesById = async (req, res) => {
        try {
            const result = await TopSliderModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static deleteTopSlidesById = async (req, res) => {
        try {
            const result = await TopSliderModel.findByIdAndDelete(req.params.id);
            res.send({success:true});
        } catch (error) {
            console.log(error);
        }
    }

    static getSingleMidById = async (req, res) => {
        try {
            const result = await MidSliderModel.findById(req.params.id);
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static createMidSlides =  async (req, res) =>{
        try {
            const result = await cloudinary.uploader.upload(req.file.path)
                let doc = new MidSliderModel({
                    avatar: result.secure_url,
                    cloudinary_id: result.public_id
                });
                await doc.save();
                res.json(doc)
        } catch (error) {
            console.log(error);
        }
    }

    static updateMidSlidesById = async (req, res)=>{
        try{ 
            let middleSlider = await MidSliderModel.findById(req.params.id);
            await cloudinary.uploader.destroy(middleSlider.cloudinary_id);
            const result = await cloudinary.uploader.upload(req.file.path);
            const data ={
                avatar: result.secure_url || middleSlider.avatar,
                cloudinary_id: result.public_id || middleSlider.cloudinary_id
            };
            middleSlider = await MidSliderModel.findByIdAndUpdate(req.params.id, data, {new : true});
            res.json(middleSlider)   
        }catch (error) {
            console.log(error);
        }
    }
    
    static deleteMidSlidesById = async (req, res) => {
        try {
        let middleSlider = await MidSliderModel.findById(req.params.id);
        //delete image form cloudinary
        await cloudinary.uploader.destroy(middleSlider.cloudinary_id);
        // delete midslider from db
        await middleSlider.remove();
        res.json(middleSlider)
        } catch (error) {
            console.log(error);
        }
    }

    static getSingleHomeDescriptionById = async (req, res) => {
        try {
            const result = await HomeDescriptionModel.findById(req.params.id);
            res.send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static createHomeDescription =  async (req, res) =>{
        try {
                const result = await cloudinary.uploader.upload(req.file.path)
                let doc = new HomeDescriptionModel({
                    title: req.body.title,
                    link:req.body.link,
                    avatar: result.secure_url,
                    cloudinary_id: result.public_id
                });
                await doc.save();
                res.json(doc)
        } catch (error) {
            console.log(error);
        }
    }

    static updateHomeDescriptionById = async (req, res)=>{
        try{   
            let description = await HomeDescriptionModel.findById(req.params.id);
            await cloudinary.uploader.destroy(description.cloudinary_id);
            const result = await cloudinary.uploader.upload(req.file.path);
            const data ={
                title: req.body.title || description.title,
                link:req.body.link || description.link,
                avatar: result.secure_url || description.avatar,
                cloudinary_id: result.public_id || description.cloudinary_id
            };
            description = await HomeDescriptionModel.findByIdAndUpdate(req.params.id, data, {new : true});
            res.json(description) 

        }catch (error) {
            console.log(error);
        }
    }

    static deleteHomeDescriptionById =async(req, res) => {
        try {
        let description = await HomeDescriptionModel.findById(req.params.id);
        //delete image form cloudinary
        await cloudinary.uploader.destroy(description.cloudinary_id);
        // delete midslider from db
        await description.remove();
        res.json(description)
        } catch (error) {
            console.log(error);
        }
    }
}

export default HomeController;