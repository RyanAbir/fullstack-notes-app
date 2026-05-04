const express = require("express");
const { getMessage } = require("../controllers/messageController");

const router = express.Router();

router.get("/api/message", getMessage);

module.exports = router;
