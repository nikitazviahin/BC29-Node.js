const express = require("express");
const cors = require("cors");
const multer = require("multer");
const ObjectId = require("bson-objectid");
const path = require("path");
const fs = require("fs/promises");

const tempDir = path.join(__dirname, "temp");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

const products = [];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", upload.single("image"), async (req, res) => {
  try {
    const { path: tempDir, originalname } = req.file;
    const uploadDir = path.join(__dirname, "public", "products", originalname);
    await fs.rename(tempDir, uploadDir);
    const image = path.join("products", originalname);
    const newProduct = {
      id: ObjectId,
      name: originalname,
      image,
    };
    products.push(newProduct);
    res.send(products);
  } catch (error) {
    await fs.unlink(req.file.path)
    console.log(error.message);
  }
});

app.listen(3000);
