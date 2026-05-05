require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const messageRoutes = require("./routes/messageRoutes");
const notesRoutes = require("./routes/notesRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.use("/", messageRoutes);
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
