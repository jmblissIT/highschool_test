import express, { Router } from 'express';
const router = express.Router();
import multer from "multer";
import fs from "fs";

import HomeController from '../controllers/homeController.js';

var storage = multer.diskStorage({
    destination : function(req, file, cb){
        var dir = "./public/uploads";

        if(!fs.existsSync(dir))
        {
            fs.mkdirSync(dir);
        }
        cb(null,dir);

    },
    filename : function(req, file, cb){
        cb(null, file.originalname);
    }
});
var upload = multer({storage:storage}).single('files');

router.get('/topslides', HomeController.getTopSlide);
router.get('/midslides', HomeController.getMidSlide);
router.get('/descriptions', HomeController.getHomeDescription);

router.get('/topslides/:id',HomeController.getSingleTopById);
router.post('/topslides',HomeController.createTopSlides);
router.put('/topslides/:id',HomeController.updateTopSlidesById);
router.delete('/topslides/:id',HomeController.deleteTopSlidesById);

router.get('/midslides/:id',HomeController.getSingleMidById);
router.post('/midslides',upload,HomeController.createMidSlides);
router.put('/midslides/:id',upload,HomeController.updateMidSlidesById);
router.delete('/midslides/:id',HomeController.deleteMidSlidesById);

router.get('/descriptions/:id',HomeController.getSingleHomeDescriptionById);
router.post('/descriptions',upload,HomeController.createHomeDescription);
router.put('/descriptions/:id',upload,HomeController.updateHomeDescriptionById);
router.delete('/descriptions/:id',HomeController.deleteHomeDescriptionById);

export default router;