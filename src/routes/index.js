import newsRouter from './news';
import siteRouter from './site';
import courseRouter from './course';

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    
    app.use('/', siteRouter);
}
export default route;
