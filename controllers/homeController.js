import TopSliderModel from '../models/topSlider.js';
import MidSliderModel from '../models/middleSlider.js';
import HomeDescriptionModel from '../models/homeDescription.js';

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
            res.status(204).send({success:true});
        } catch (error) {
            console.log(error);
        }
    }

}

export default HomeController;