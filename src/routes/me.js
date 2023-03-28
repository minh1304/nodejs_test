import express from 'express';
const router = express.Router();
import meController from '../app/controllers/MeController';

router.get('/stored/courses', meController.storeCourses);

export default router;
meController;
