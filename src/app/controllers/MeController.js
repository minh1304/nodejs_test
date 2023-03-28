import { multipleMongooseToObject } from '../../util/mongoose';
import Course from '../models/Course';

class NewController {
    //[GET] /me/storeCourses
    storeCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('me/store-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}
export default new NewController();