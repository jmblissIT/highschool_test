import express, { Router } from 'express';
const router = express.Router();
import upload from "../utils/multer.js";
import HomeController from '../controllers/homeController.js';

router.get('/topslides', HomeController.getTopSlide);
router.get('/topslides/:id',HomeController.getSingleTopById);
router.post('/topslides',HomeController.createTopSlides);
router.put('/topslides/:id',HomeController.updateTopSlidesById);
router.delete('/topslides/:id',HomeController.deleteTopSlidesById);

router.get('/midslides', HomeController.getMidSlide);
router.get('/midslides/:id',HomeController.getSingleMidById);
router.post('/midslides',upload,HomeController.createMidSlides);
router.put('/midslides/:id',upload,HomeController.updateMidSlidesById);
router.delete('/midslides/:id',HomeController.deleteMidSlidesById);

router.get('/descriptions', HomeController.getHomeDescription);
router.get('/descriptions/:id',HomeController.getSingleHomeDescriptionById);
router.post('/descriptions',upload,HomeController.createHomeDescription);
router.put('/descriptions/:id',upload,HomeController.updateHomeDescriptionById);
router.delete('/descriptions/:id',HomeController.deleteHomeDescriptionById);

export default router;