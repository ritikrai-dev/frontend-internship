const express = require("express");

const router = express.Router();

const {
  submitContact,
  getMessages,
  deleteMessage,
} = require("../controllers/contactController");

router.post("/", submitContact);

router.get("/", getMessages);

router.delete("/:id", deleteMessage);

module.exports = router;