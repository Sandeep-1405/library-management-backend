const Library = require('../models/libraryModel');

const createDetails = async(req,res)=>{
    console.log(req.body);
    const {studentName,bookName,startDate,endDate} = req.body;

    try{
        const res = new Library({studentName,bookName,startDate,endDate});
        await res.save();
        res.json(res);

    }catch(error){
        console.log(error.message);
        res.json({error:error.message});
    }
}

const getList = async(req,res) => {
    try{
        const list = await Library.find();
        res.json(list)
    }catch(error){
        console.log(error.message);
        res.json({error:error.message});
    }
}

const deleteDetails = async (req,res) => {
    const {id} = req.params;

    try{
        await Library.findByIdAndDelete({_id:id});
        res.json({message:"Details Deleted"});
    }catch(error){
        console.log(error.message);
        res.json({error:error.message});
    }
}

const getDetailsById = async(req,res) =>{
    const {id} = req.params;
    try{
        const details = await Library.findById({_id:id});
        res.json(details);
    }catch(error){
        console.log(error.message);
        res.json({error:error.message});
    }
}

const updateLibraryDetails = async(req,res) => {
    const {id} = req.params;
    const {studentName,bookName,startDate,endDate} = req.body;
    try{
        const details = await Library.findByIdAndUpdate(id,{studentName,bookName,startDate,endDate})
        res.status(200).json(details);
    }catch(error){
        console.log(error.message);
        res.json({error:error.message});
    }
}

module.exports = 
{
    createDetails,
    getList,
    deleteDetails,
    getDetailsById,
    updateLibraryDetails
};