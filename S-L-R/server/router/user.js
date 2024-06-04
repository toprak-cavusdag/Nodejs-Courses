import express from "express";
import bcryt from "bcrypt";

const router = express.Router();

router.post("/signup", (req, res) => {
  const { email, username, password } = req.body;
});