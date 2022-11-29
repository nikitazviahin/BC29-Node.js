const fs = require("fs/promises");
const path = require("path");
const ObjectId = require("bson-objectid");

const booksPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const result = await fs.readFile(booksPath);
  return JSON.parse(result);
};

const getByID = async (id) => {
  const books = await getAll();
  const result = await books.find((item) => item.id === id);
  if (!result) return null;
  return result;
};

const add = async (title, author) => {
  const books = await getAll();
  const newBook = {
    title,
    author,
    id: ObjectId(),
  };
  books.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return newBook;
};

const removeByID = async (id) => {
  const books = await getAll();
  const idx = books.findIndex((item) => item.id === id);
  if (idx === -1) return null;
  const [result] = books.splice(idx, 1);
	await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return result;
};

module.exports = { getAll, getByID, add, removeByID };
