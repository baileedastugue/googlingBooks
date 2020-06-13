const Book = require('../models/Book');

module.exports = {
    findAll: function(req, res) {
        Book
            .find(req.query)
            .sort({ title: -1 })
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },
    

}