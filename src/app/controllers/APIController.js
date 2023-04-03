import Course from '../models/Course';
import { multipleMongooseToObject } from '../../util/mongoose';

class APIController {
    // [GET] /me/storeCourses
    async getAllCourse(req, res, next) {
        try {
            const courses = await Course.find({});
            res.status(200).json({
                message: 'OK',
                courses: multipleMongooseToObject(courses),
            });
        } catch (error) {
            next(error);
        }
    }
}
export default new APIController();
