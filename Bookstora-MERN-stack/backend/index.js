const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const Book = require("./models/bookModels.js");

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to my backend service");
});

app.post("/books", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(500).send({
        message: "Send all required fields: title, author or publishYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

app.listen(port || 8000, () => {
  console.log(`Server running on the port ${port}...`);
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((err) => {
    console.log("Error from db: ", err);
  });
