const db = require("../models");

module.exports = {
    findBooks: function(req, res) {
        db.Book
          .find(req.query)
          .then(booksData => res.send(booksData))
          .catch(error => res.status(500).json(error));
    },
    findBookById: function(req, res) {
        db.Book
          .findById(req.params.id)
          .then(bookData => res.json(bookData))
          .catch(error => res.send(500).json(error));
    },
    addBook: function(req, res) {
        db.Book
          .create(req.body)
          .then(result => res.json(result))
          .catch(error => res.send(500).json(error));
    },
    removeBook: function(req, res) {
        db.Book
          .findById({ _id: req.params.id })
          .then(bookData => bookData.remove())
          .then(result => res.json(result))
          .catch(error => res.send(500).json(error));
    }
}