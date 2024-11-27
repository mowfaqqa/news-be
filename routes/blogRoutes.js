const express = require("express");
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/create", authMiddleware, createBlog);
router.get("/blog", getAllBlogs); 
router.get("//blog/:id", getBlogById);
router.put("/blog/:id", authMiddleware, updateBlog);
router.delete("/blog/:id", authMiddleware, deleteBlog);

module.exports = router;
