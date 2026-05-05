require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const notesRoutes = require("./routes/notesRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/notes", notesRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: "Route not found", path: req.path });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
