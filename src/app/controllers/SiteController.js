import { multipleMongooseToObject } from '../../util/mongoose';
import Course from '../models/Course';

class NewController {
    //[GET] /home
    home(req, res, next) {
        const result = Course.find().exec();
        result
            .then((courses) => {

                // courses = courses.map((course) => course.toObject());
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch((err) => {
                res.status(400).json({ err: 'error!!!' });
            });

        // try {
        //     const courses = await Course.find().exec();
        //     const test = {}
        //     test = courses.map((course) => course.toObject());
        //     res.render('home', { test });
        // } catch (err) {
        //     next(err);
        // }
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}
export default new NewController();
