const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    }

})

const Library = mongoose.model('Library',librarySchema);

module.exports = Library;