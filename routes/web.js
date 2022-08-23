import express, { Router } from 'express';
const router = express.Router();
import HomeController from '../controllers/homeController.js';

router.get('/topslides', HomeController.getTopSlide);
router.get('/midslides', HomeController.getMidSlide);
router.get('/descriptions', HomeController.getHomeDescription);

export default router;