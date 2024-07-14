const express = require('express');
const router = express.Router();

const BookController = require('../controllers/BookController');

router.route('/')
    .post(BookController.createBook)
    .get(BookController.getBookList);

router.route('/:id')
    .get(BookController.getBookDetail)
    .put(BookController.updateBookDetail)
    .delete(BookController.deleteBook);

module.exports = router;
export {}