import Course from '../models/Course';
import { mongooseToObject } from '../../util/mongoose';

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    // [GET] /courses/:slug
    create(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/create');
            })
            .catch(next);
    }
    // [GET]/courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
    // [PUT]/courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }

    // [POST] /courses/store
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});

        // formData.image = `https://img.youtube.com/vi/${req.body.video_id}/sddefault.jpg`;
        // const course = new Course(formData);
        // course
        //     .save()
        //     .then(() => res.redirect('/'))
        //     .catch((err) => {});
    }
}
export default new CourseController();
