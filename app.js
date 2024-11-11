const express = require("express");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(bodyParser.json());
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes); // Authentication routes

module.exports = app;
