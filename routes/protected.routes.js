const express = require("express");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Welcome to the dashboard!", user: req.user });
});

module.exports = router;
