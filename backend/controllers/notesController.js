const Note = require("../models/Note");

const getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

const createNote = async (req, res) => {
  const { text } = req.body;
  const note = await Note.create({ text });

  res.json(note);
};

const updateNote = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const updated = await Note.findByIdAndUpdate(id, { text }, { new: true });
  res.json(updated);
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.json({ message: "Note deleted" });
};

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
