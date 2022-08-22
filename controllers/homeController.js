import TopSliderModel from '../models/topSlider.js';
import MidSliderModel from '../models/middleSlider.js';

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

}

export default HomeController;