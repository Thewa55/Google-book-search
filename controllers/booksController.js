const { Book } = require("../models");


const getSavedBooks = (req, res) => {
  Book.find({}).then(dbBookData => 
    res.json(dbBookData))
    .catch(err => {
      console.log(err)
      res.json(err)})
};

const savedBook = (req, res) => {
  Book.create(req.body).then(dbBookData =>
    res.json(dbBookData))
    .catch(err => {
      console.log(err)
      res.json(err)})
};

const removeBook = (req, res) => {
  Book.remove({_id : req.params.id}).then(dbBookData =>
    res.json(dbBookData))
    .catch(err => {
      console.log(err)
      res.json(err)})
}

module.exports = {
  getSavedBooks,
  savedBook,
  removeBook
}
// // Defining methods for the booksController
// module.exports = {
//   findAll: function(req, res) {
//     db.Book
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.Book
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };
