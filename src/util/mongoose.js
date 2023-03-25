// function multipleMongooseToObject() {
//     return mongoose.map((mongoose) => mongoose.toObject());
// }

// export { multipleMongooseToObject };

// module.exports = {
//     multipleMongooseToObject: function (mongooses) {
//         return mongooses.map((mongoose) => mongoose.toObject());
//     },
//     mongooseToObject: function (mongoose) {
//         return mongoose ? mongoose.toObject() : mongoose;
//     },
// };

const multipleMongooseToObject = (mongooses) => {
    return mongooses.map((mongoose) => mongoose.toObject());
};
const mongooseToObject = (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
};
export {multipleMongooseToObject, mongooseToObject}
