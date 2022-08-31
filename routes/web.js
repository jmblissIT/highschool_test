import express, { Router } from 'express';
const router = express.Router();
import HomeController from '../controllers/homeController.js';

router.get('/topslides', HomeController.getTopSlide);
router.get('/midslides', HomeController.getMidSlide);
router.get('/descriptions', HomeController.getHomeDescription);

router.post('/topslides',HomeController.createTopSlides);
router.put('/topslides/:id',HomeController.updateTopSlidesById);
router.delete('/topslides/:id',HomeController.deleteTopSlidesById);

export default router;