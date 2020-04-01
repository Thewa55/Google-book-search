const router = require("express").Router();
const { getSavedBooks, saveBook, removeBook} = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(getSavedBooks)
  .post(saveBook);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(removeBook);

module.exports = router;
