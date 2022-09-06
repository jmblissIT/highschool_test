import TopSliderModel from '../models/topSlider.js';
import MidSliderModel from '../models/middleSlider.js';
import HomeDescriptionModel from '../models/homeDescription.js';
import fs from "fs";

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
                const doc = new MidSliderModel({
                    filename : req.file.filename
                });
                const result = await doc.save();
                res.status(201).send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static updateMidSlidesById = async (req, res)=>{
        try{
            let id = req.params.id;
            let new_img = "";

            if (req.file){
                new_img = req.file.filename;
                try{
                    fs.unlinkSync("./public/uploads/"+ req.body.old_image)
                } catch (err){
                    console.log(err)
                }
            } else {
                new_img = req.body.old_image;
            }
         
            await MidSliderModel.findByIdAndUpdate(id, {
                filename : new_img, 
            });
            res.send({success:true});    
        }catch (error) {
            console.log(error);
        }
    }
    
    static deleteMidSlidesById = (req, res) => {
        try {
             MidSliderModel.findByIdAndDelete(req.params.id, (err, result)=>{
                if(result.filename != ""){
                    try{
                        fs.unlinkSync('./public/uploads/'+result.filename)
                    } catch(err){
                        console.log(err)
                    }
                }
                res.send({success:true});
        });
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
                const doc = new HomeDescriptionModel({
                    image : req.file.filename,
                    title : req.body.title,
                    link : req.body.link
                });
                const result = await doc.save();
                res.status(201).send(result);
        } catch (error) {
            console.log(error);
        }
    }

    static updateHomeDescriptionById = async (req, res)=>{
        try{
            let id = req.params.id;
            let new_img = "";

            if (req.file){
                new_img = req.file.filename;
                try{
                    fs.unlinkSync("./public/uploads/"+ req.body.old_image)
                } catch (err){
                    console.log(err)
                }
            } else {
                new_img = req.body.old_image;
            }
         
            await HomeDescriptionModel.findByIdAndUpdate(id, {
                title : req.body.title,
                link : req.body.link,
                image : new_img 
            });
            res.send({success:true});    
        }catch (error) {
            console.log(error);
        }
    }

    static deleteHomeDescriptionById = (req, res) => {
        try {
            HomeDescriptionModel.findByIdAndDelete(req.params.id, (err, result)=>{
                if(result.image != ""){
                    try{
                        fs.unlinkSync('./public/uploads/'+result.image)
                    } catch(err){
                        console.log(err)
                    }
                }
                res.send({success:true});
        });
        } catch (error) {
            console.log(error);
        }
    }
}

export default HomeController;