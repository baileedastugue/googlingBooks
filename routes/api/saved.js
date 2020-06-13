const express = require('express');
const router = express.Router();
const savedController = require('../../controllers/savedController')

// @route   Matches api/saved
// @access  Public
router
    .route('/')
    .get(savedController.findAll);

// @route   POST api/books
// @desc    Creates a new book
// @access  Public
// router.post('/', (req, res) => {
//     const newBook = new Book({
//         title: req.body.title
//     });

//     newBook.save()
//         .then(book => res.json(book))
// })

module.exports = router;