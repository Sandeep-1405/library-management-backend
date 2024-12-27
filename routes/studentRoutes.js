const studentRouter = require('express').Router();
const multer = require('multer');

const {
    getStudentsList, 
    createStudent,
    deleteStudent,
    getStudentDetails,
    updateStudentDetails
} = require('../controllers/studentController')

const upload = multer({dest:'uploads/'});

studentRouter.get('/', getStudentsList);

studentRouter.post('/', upload.fields([{name:"photo"},{name:"video"}]),createStudent);

studentRouter.put('/:id', upload.fields([{name:"photo"},{name:"video"}]), updateStudentDetails);

studentRouter.delete('/:id', deleteStudent);

studentRouter.get('/:id', getStudentDetails);



module.exports = studentRouter;