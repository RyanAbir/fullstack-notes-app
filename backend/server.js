const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from backend API 🚀" });
});

app.listen(5000, () => {
  console.log("Backend running on http://127.0.0.1:5000");
});
