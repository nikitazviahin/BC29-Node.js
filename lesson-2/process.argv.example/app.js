const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAll();
      console.log(allBooks);
      break;
    case "getByID":
      const book = await books.getByID(id);
      console.log(book);
      break;
    case "add":
      const newBook = await books.add(title, author);
      console.log(newBook);
      break;
    case "removeByID":
      const deletedBook = await books.removeByID(id);
      console.log(deletedBook);
      break;
    default:
      console.log("Unknown action");
  }
};

const actionIdx = process.argv.indexOf("--action");

if (actionIdx !== -1) {
  const action = process.argv[actionIdx + 1];
  invokeAction({ action });
}
