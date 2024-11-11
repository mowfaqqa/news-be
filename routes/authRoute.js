const express = require("express");
const { registerAdmin, loginAdmin } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerAdmin); // Optional route for registering admin
router.post("/login", loginAdmin);

module.exports = router;
