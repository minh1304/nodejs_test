import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Course = new Schema({
    id: { type: Number, minLength: 1 },
    name: { type: String, maxLength: 255 },
    description: { type: String, minLength: 1 },
    instructor: { type: String, maxLength: 255 },
    price: { type: Number, minLength: 1 },
    createDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now },
});
export default mongoose.model('Course', Course);
