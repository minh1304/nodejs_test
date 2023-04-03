import express from 'express';
import APIController from '../app/controllers/APIController';
const router = express.Router();

const initAPIRoute = (app) => {
    router.get('/stored/courses', APIController.getAllCourse); //method GET
    return app.use('/api/v1/', router);
};

export default initAPIRoute;
