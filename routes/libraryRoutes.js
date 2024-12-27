const libraryRouter = require('express').Router();

const {
    createDetails,
    getList,
    deleteDetails,
    getDetailsById,
    updateLibraryDetails
} = require('../controllers/libraryController')


libraryRouter.get('/', getList);

libraryRouter.post('/',createDetails);

libraryRouter.put('/:id', updateLibraryDetails);

libraryRouter.delete('/:id', deleteDetails);

libraryRouter.get('/:id', getDetailsById);



module.exports = libraryRouter;