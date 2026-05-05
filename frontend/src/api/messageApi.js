async function getMessage() {
  const response = await fetch(
    "https://notes-backend-jyre.onrender.com/api/message"
  );

  return response.json();
}

export default getMessage;
