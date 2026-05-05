export async function getNotes() {
  const response = await fetch("https://notes-backend-91tr.onrender.com/api/notes");

  return response.json();
}

export async function createNote(text) {
  const response = await fetch("https://notes-backend-91tr.onrender.com/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return response.json();
}

export async function updateNote(id, text) {
  const response = await fetch(`https://notes-backend-91tr.onrender.com/api/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return response.json();
}

export async function deleteNote(id) {
  const response = await fetch(`https://notes-backend-91tr.onrender.com/api/notes/${id}`, {
    method: "DELETE",
  });

  return response.json();
}
