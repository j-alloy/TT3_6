const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(process.env.CONNECTION_URL).then(() => {
//   console.log(`Server Running on Port ${PORT}`);
// });

app.listen(5000, () => {
  console.log("Port Running");
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ msg: 'Please enter both username and password' });
  }

  res.json({ msg: 'Logged in successfully', user: { id: 2, username: username } });
  
});