const Student = require('../models/studentModel');

const createStudent = async(req,res)=>{

    const {name,clas} = req.body;
    const photo = req.files.photo[0].filename;
    const video = req.files.video[0].filename;
    //console.log(req.body);

    try{
        const student = new Student({name,clas,photo,video});
        await student.save();
        res.status(201).json({message:student});

    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

const getStudentsList = async(req,res) => {
    try{
        const studentsList = await Student.find();
        res.status(200).json({studentsList})
    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

const deleteStudent = async (req,res) => {
    const {id} = req.params;

    try{
        await Student.findByIdAndDelete({_id:id});
        res.status(200).json({message:"Student Deleted"});
    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

const getStudentDetails = async(req,res) =>{
    const {id} = req.params;
    try{
        const details = await Student.findById({_id:id});
        res.status(200).json(details);
    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

const updateStudentDetails = async(req,res) => {
    const {id} = req.params;
    const {name,clas} = req.body;
    const photo = req.files.photo[0].filename;
    const video = req.files.video[0].filename;
    try{
        const details = await Student.findByIdAndUpdate(id,{name,clas,photo,video})
        res.status(200).json(details);
    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

module.exports = 
{
    createStudent,
    getStudentsList,
    deleteStudent,
    getStudentDetails,
    updateStudentDetails
};