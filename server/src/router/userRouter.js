const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  res.send({ msg: "hello wrold" });
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(name && email && password)) {
      return res.status(404).send({ msg: "all field are required" });
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(404).send({ msg: "user already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    const token = await jwt.sign(
      { _id: user._id, email: email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );

    res.status(200).send({ token, name: user.name, email: user.email });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      return res.status(500).json({ message: "all field are required" });
    }
    const user = await User.findOne({ email });
    const decodedHashedPassword = await bcrypt.compare(password, user.password);
    if (!(user && decodedHashedPassword)) {
      return res.status(500).send("invalid login");
    }

    const token = await jwt.sign(
      { _id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "2h",
      }
    );
    if (token === undefined) {
      return res.status(404).send({ msg: "invalid failed" });
    }
    res.status(200).send({ token, name: user.name, email: user.email, isAdmin: user.isAdmin });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
});
module.exports = router;
