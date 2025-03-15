const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import routes
const productRoutes = require("./routes/product.routes.js");
const authRoutes = require("./routes/auth.routes");
const protectedRoutes = require("./routes/protected.routes");

// Use routes
app.use("/api/product", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);

app.get("/", (req, res) => {
  res.send("Hello, this is from Node.js!");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
  });
