const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to my backend service");
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
