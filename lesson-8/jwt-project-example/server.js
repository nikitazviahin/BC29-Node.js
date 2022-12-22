const app = require("./app");
const mongoose = require("mongoose");

const { MONGO_URI, PORT } = process.env;

mongoose.set('strictQuery', false);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log("Server is running"));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });