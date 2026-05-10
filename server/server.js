require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log(err));

// routes
const noteRoutes = require("./routes/noteRoutes");
app.use("/notes", noteRoutes);

// server start
app.listen(5000, () => {
  console.log("Server started on port 5000");
});