const notes = require("../data/notes");

const getNotes = (req, res) => {
  res.json(notes);
};

const createNote = (req, res) => {
  const { text } = req.body;
  const newNote = {
    id: Date.now(),
    text,
  };

  notes.push(newNote);
  res.json(newNote);
};

const updateNote = (req, res) => {
  const id = Number(req.params.id);
  const { text } = req.body;
  const note = notes.find((item) => item.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  note.text = text;
  return res.json(note);
};

const deleteNote = (req, res) => {
  const id = Number(req.params.id);
  const noteIndex = notes.findIndex((item) => item.id === id);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  notes.splice(noteIndex, 1);
  return res.json({ message: "Note deleted successfully" });
};

module.exports = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};
