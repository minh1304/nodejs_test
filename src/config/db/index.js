import mongoose from 'mongoose';
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.log('kết nối thành công');
    } catch (error) {
        console.log('kết mối thất bại', error);
    }
}

export default connect;
