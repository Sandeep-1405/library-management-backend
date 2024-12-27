const bookRouter = require('express').Router();

const {
    getBooksList, 
    createBook,
    deleteBook,
    getBookDetails,
    updateBookDetails
} = require('../controllers/bookController')


bookRouter.get('/', getBooksList);

bookRouter.post('/',createBook);

bookRouter.put('/:id', updateBookDetails);

bookRouter.delete('/:id', deleteBook);

bookRouter.get('/:id', getBookDetails);



module.exports = bookRouter;