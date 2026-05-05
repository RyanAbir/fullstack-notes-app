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

  const styles = {
    page: {
      minHeight: "100vh",
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "32px 16px",
      background:
        "linear-gradient(135deg, #f3f4f6 0%, #e0f2fe 45%, #f8fafc 100%)",
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
      color: "#000000",
    },
    card: {
      width: "100%",
      maxWidth: 760,
      backgroundColor: "#ffffff",
      borderRadius: 24,
      padding: 32,
      boxShadow: "0 24px 60px rgba(15, 23, 42, 0.12)",
      border: "1px solid rgba(148, 163, 184, 0.18)",
    },
    header: {
      textAlign: "center",
      marginBottom: 28,
    },
    title: {
      margin: 0,
      fontSize: "2.5rem",
      lineHeight: 1.1,
      color: "#000000",
    },
    subtitle: {
      margin: "12px auto 0",
      maxWidth: 560,
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#475569",
    },
    composer: {
      display: "flex",
      gap: 12,
      marginBottom: 24,
      flexWrap: "wrap",
    },
    input: {
      flex: "1 1 320px",
      padding: "10px",
      borderRadius: 14,
      border: "1px solid #ccc",
      fontSize: "1rem",
      outline: "none",
      backgroundColor: "#ffffff",
      color: "#000000",
    },
    primaryButton: {
      border: "none",
      borderRadius: 14,
      padding: "14px 18px",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      fontSize: "0.95rem",
      fontWeight: 600,
      cursor: "pointer",
    },
    notesList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "grid",
      gap: 14,
    },
    noteItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      padding: 18,
      borderRadius: 18,
      backgroundColor: "#f8fafc",
      border: "1px solid #e2e8f0",
    },
    noteText: {
      margin: 0,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: "#222",
      wordBreak: "break-word",
      flex: 1,
    },
    noteActions: {
      display: "flex",
      gap: 10,
      flexShrink: 0,
    },
    secondaryButton: {
      borderRadius: 12,
      padding: "10px 14px",
      fontSize: "0.9rem",
      fontWeight: 600,
      cursor: "pointer",
      border: "1px solid #cbd5e1",
      backgroundColor: "#ffffff",
      color: "#0f172a",
    },
    dangerButton: {
      borderRadius: 12,
      padding: "10px 14px",
      fontSize: "0.9rem",
      fontWeight: 600,
      cursor: "pointer",
      border: "1px solid #fecaca",
      backgroundColor: "#fff1f2",
      color: "#be123c",
    },
    emptyState: {
      margin: 0,
      padding: "24px 16px",
      textAlign: "center",
      color: "#64748b",
      borderRadius: 16,
      backgroundColor: "#f8fafc",
      border: "1px dashed #cbd5e1",
    },
  };

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
    <div style={styles.page}>
      <main style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>NotesFlow</h1>
          <p style={styles.subtitle}>
            A full-stack notes app built with React, Express, MongoDB, Render,
            and Vercel
          </p>
        </div>

        <div style={styles.composer}>
          <input
            type="text"
            value={newNoteText}
            onChange={(event) => setNewNoteText(event.target.value)}
            placeholder="Capture a thought, task, or idea"
            style={styles.input}
          />
          <button onClick={handleAddNote} style={styles.primaryButton}>
            Add Note
          </button>
        </div>

        {notes.length === 0 ? (
          <p style={styles.emptyState}>
            No notes yet. Add your first note to get started.
          </p>
        ) : (
          <ul style={styles.notesList}>
            {notes.map((note) => (
              <li key={note._id} style={styles.noteItem}>
                <p style={styles.noteText}>{note.text}</p>
                <div style={styles.noteActions}>
                  <button
                    onClick={() => handleEditNote(note._id, note.text)}
                    style={styles.secondaryButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteNote(note._id)}
                    style={styles.dangerButton}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}

export default App;
