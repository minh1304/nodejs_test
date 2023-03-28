import { multipleMongooseToObject } from '../../util/mongoose';
import Course from '../models/Course';

class NewController {
    //[GET] /home
    home(req, res, next) {
        Course.find({})
        .then((courses) => {
            res.render('home', {
                courses: multipleMongooseToObject(courses),
            });
        })
        .catch(next);

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
