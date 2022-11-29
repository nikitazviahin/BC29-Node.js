const fs = require("fs/promises");
const ObjectID = require("bson-objectid");

const path = require("path");

const booksPath = path.join(__dirname, "./books.json");

const getAll = async () => {
  const result = await fs.readFile(booksPath);
  return JSON.parse(result);
};

const getByID = async (id) => {
  const books = await getAll();
  const book = books.find((item) => item.id === id);
  if (!books) return null;
  return book;
};

const add = async (title, author) => {
  const newBook = {
    title,
    author,
    id: ObjectID(),
  };
  const books = await getAll();
  books.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return newBook;
};

const removeById = async (id) => {
  const books = await getAll();
  const idx = books.findIndex((item) => item.id === id);
  if (idx === -1) return null;
  const [removedBook] = books.splice(idx, 1);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return removedBook;
};

module.exports = { getAll, getByID, add, removeById };
