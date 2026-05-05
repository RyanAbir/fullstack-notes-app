require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("./controllers/notesController");

const app = express();
const PORT = process.env.PORT || 5000;

console.log("SERVER_VERSION=render-debug-v2");

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.get("/debug-version", (req, res) => {
  res.json({ version: "render-debug-v2", notesRoute: "/api/notes" });
});

app.get("/api/notes", getNotes);
app.post("/api/notes", createNote);
app.put("/api/notes/:id", updateNote);
app.delete("/api/notes/:id", deleteNote);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: "Route not found", path: req.path });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
