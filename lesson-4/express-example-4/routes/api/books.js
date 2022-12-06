const express = require("express");

const books = require("../../data/books");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(books);
});

router.get("/:id", (req, res) => {
  res.json({
    title: "title",
    author: "author",
  });
});

module.exports = router;
