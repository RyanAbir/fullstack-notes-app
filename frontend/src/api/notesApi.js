export async function getNotes() {
  const response = await fetch("http://127.0.0.1:5000/api/notes");

  return response.json();
}

export async function createNote(text) {
  const response = await fetch("http://127.0.0.1:5000/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return response.json();
}

export async function updateNote(id, text) {
  const response = await fetch(`http://127.0.0.1:5000/api/notes/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return response.json();
}

export async function deleteNote(id) {
  const response = await fetch(`http://127.0.0.1:5000/api/notes/${id}`, {
    method: "DELETE",
  });

  return response.json();
}
