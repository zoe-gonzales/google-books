const router = require("express").Router();
const booksController = require("../../controllers/controller");

router.route("/")
    .get(booksController.findBookById)
    .post(booksController.addBook);

router.route("/saved")
    .get(booksController.findAll)
    .delete(booksController.removeBook)

module.exports = router;