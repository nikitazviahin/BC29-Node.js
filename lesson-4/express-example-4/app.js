const express = require("express");

const booksRouter = require("./routes/api/books");

const app = express();

app.use("/api/books", booksRouter);

app.listen(3000, () => console.log("Server Running"));
