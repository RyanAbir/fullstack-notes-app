async function getMessage() {
  const response = await fetch("http://127.0.0.1:5000/api/message");

  return response.json();
}

export default getMessage;
