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

router.post("/", authMiddleware, createBlog);
router.get("/", getAllBlogs); // Public access to view blogs
router.get("/:id", getBlogById); // Public access to view a blog by ID
router.put("/:id", authMiddleware, updateBlog);
router.delete("/:id", authMiddleware, deleteBlog);

module.exports = router;
