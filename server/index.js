const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// import mongoose from "mongoose";
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL).then(() => {
  console.log("Database running...");
});

app.listen(5000, () => {
  console.log(`Server Running on Port ${PORT}`);
});
