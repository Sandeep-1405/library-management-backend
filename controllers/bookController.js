const Book = require('../models/bookModel');

const createBook = async(req,res)=>{

    const {name,author,publication,year} = req.body;

    try{
        const book = new Book({name,author,publication,year});
        await book.save();
        res.status(201).json({message:book});

    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

const getBooksList = async(req,res) => {
    try{
        const booksList = await Book.find();
        res.status(200).json({booksList})
    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

const deleteBook = async (req,res) => {
    const {id} = req.params;

    try{
        await Book.findByIdAndDelete({_id:id});
        res.status(200).json({message:"Book Deleted"});
    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

const getBookDetails = async(req,res) =>{
    const {id} = req.params;
    try{
        const details = await Book.findById({_id:id});
        res.status(200).json(details);
    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

const updateBookDetails = async(req,res) => {
    const {id} = req.params;
    const {name,author,publication,year} = req.body;
    try{
        const details = await Book.findByIdAndUpdate(id,{name,author,publication,year})
        res.status(200).json(details);
    }catch(error){
        console.log(error.message);
        res.status(500).json({error:error.message});
    }
}

module.exports = 
{
    createBook,
    getBooksList,
    deleteBook,
    getBookDetails,
    updateBookDetails
};