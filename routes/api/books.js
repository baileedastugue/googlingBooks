const express = require('express');
const router = express.Router();

// book model
const Book = require('../../models/Book');

// @route   GET api/books
// @desc    Gets all books
// @access  Public
router.get('/', (req, res) => {
    Book.find({})
        // .sort({ title: -1 })
        .then(books => res.json(books));
})

// @route   POST api/books
// @desc    Creates a new book
// @access  Public
router.post('/', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        authors: req.body.authors,
        descrption: req.body.descrption,
        image: req.body.image,
        link: req.body.link
    });

    newBook.save()
        .then(book => res.json(book))
})

module.exports = router;