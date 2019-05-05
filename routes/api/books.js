const router = require("express").Router();
const booksController = require("../../controllers/controller");

router.route("/")
    .get(booksController.findAll)
    .post(booksController.addBook);

router.route("/:id")
    .delete(booksController.removeBook);

module.exports = router;