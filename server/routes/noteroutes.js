const express = require("express");
const router = express.Router();
const Note = require("../models/notes");

// CREATE NOTE
router.post("/", async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNote = new Note({ title, content });

    await newNote.save();

    res.json(newNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL NOTES
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;