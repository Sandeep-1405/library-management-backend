const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    clas:{
        type:Number,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    }

})

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;