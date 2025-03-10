// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = process.env.PORT || 6000;
// const MONGO_URI = process.env.MONGO_URI;

// app.use(express.json());

// mongoose.connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB Connected!"))
// .catch(err => console.error("❌ MongoDB Connection Error:", err));

// app.get("/", (req, res) => {
//     res.send("🚀 Server is running!");
// });

// app.listen(PORT, () => {
//     console.log(`🚀 Server is running on port ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse form data

// Connect to MongoDB
connectDB();

// Routes
app.use("/products", require("./routes/itemRoutes"));

app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


