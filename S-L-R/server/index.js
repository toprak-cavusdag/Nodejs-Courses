import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.listen(port || 8000, () => {
  console.log(`Server running on the port ${port}...`);
});