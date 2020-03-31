const router = require("express").Router();
const { getSavedBooks, savedBook, removeBook} = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(getSavedBooks)
  .post(savedBook);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(removeBook);

module.exports = router;
