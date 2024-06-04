import express from "express";
import bcryt from "bcrypt";
import { User } from "../models/User.js";
const router = express.Router();
router.post("/signup", async (req, res) => {
  const { email, username, password } = req.body;
  const user = await User.findOne({ email });
  //User Sign Chechk
  if (user) {
    return res.json({ message: "User already existed" });
  }
  //Password Hash
  const hashPassword = await bcryt.hash(password, 10); // 10 hashleme oranı
  const newUser = await new User({
    email,
    username,
    password: hashPassword,
  });
  await newUser.save();
  res.status(201).json({ status: true, message: "User Created" });
});

router.get("/signup", async (req, res) => {});

export { router as UserRouter };
