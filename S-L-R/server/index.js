import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { UserRouter } from "./router/user.js";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.use("/auth", UserRouter);

mongoose
  .connect(process.env.MONGOBB_URL)
  .then(() => console.log("DB connected..."))
  .catch((err) => {
    console.log("DB got an error: ", err.message);
  });

app.listen(port || 8000, () => {
  console.log(`Server running on the port ${port}...`);
});
