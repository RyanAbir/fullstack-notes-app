import { useEffect, useState } from "react";
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "./api/notesApi";

function App() {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState("");

  const loadNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  useEffect(() => {
    loadNotes();
  }, []);

  const handleAddNote = async () => {
    if (!newNoteText.trim()) {
      return;
    }

    await createNote(newNoteText);
    setNewNoteText("");
    await loadNotes();
  };

  const handleEditNote = async (id, currentText) => {
    const updatedText = window.prompt("Edit note", currentText);

    if (updatedText === null || !updatedText.trim()) {
      return;
    }

    await updateNote(id, updatedText);
    await loadNotes();
  };

  const handleDeleteNote = async (id) => {
    await deleteNote(id);
    await loadNotes();
  };

  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <h1>Notes</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <input
          type="text"
          value={newNoteText}
          onChange={(event) => setNewNoteText(event.target.value)}
          placeholder="Enter a note"
          style={{ flex: 1, padding: 8 }}
        />
        <button onClick={handleAddNote} style={{ padding: "8px 12px" }}>
          Add Note
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {notes.map((note) => (
          <li
            key={note._id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 12,
              border: "1px solid #ccc",
              marginBottom: 10,
            }}
          >
            <span>{note.text}</span>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => handleEditNote(note._id, note.text)}>
                Edit
              </button>
              <button onClick={() => handleDeleteNote(note._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
