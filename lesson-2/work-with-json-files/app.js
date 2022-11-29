const books = require("./books");

const invokeAction = async ({ action, id, author, title }) => {
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
      const removedBook = await books.removeById(id);
      console.log(removedBook);
      break;
    default:
      console.log("Unkown action");
  }
};

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getByID", id: "u9kgwNWGi3uUUwh0b8V49" });
// invokeAction({
//   action: "add",
//   title: "Lord of the rings",
//   author: "J.R.R. Tolkien",
// });
// invokeAction({ action: "removeByID", id: "CTHE0f1kkWwqS5sL2tI8_" });
