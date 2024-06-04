import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

mongoose
  .connect(process.env.MONGOBB_URL)
  .then(() => console.log("DB connected..."))
  .catch((err) => {
    console.log("DB got an error: ", err.message);
  });

app.listen(port || 8000, () => {
  console.log(`Server running on the port ${port}...`);
});
