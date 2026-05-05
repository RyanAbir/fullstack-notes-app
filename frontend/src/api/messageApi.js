async function getMessage() {
  const response = await fetch(
    "https://notes-backend-91tr.onrender.com/api/message"
  );

  return response.json();
}

export default getMessage;
