require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");
const notesRoutes = require("./routes/notesRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/", messageRoutes);
app.use("/api/notes", notesRoutes);

app.listen(5000, () => {
  console.log("Backend running on http://127.0.0.1:5000");
});
