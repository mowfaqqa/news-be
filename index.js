const express = require("express");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoute");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
app.use(express.json());
// Enable CORS for all routes
app.use(cors());
// ========================
// Error Handler Middleware
// ========================

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    success: false,
    error: "something went wrong!",
  });
});

app.use("/api", authRoutes);
app.use("/api", blogRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
