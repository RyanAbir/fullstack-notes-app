# NotesFlow - Full Stack Notes App

NotesFlow is a full-stack CRUD notes application built with:

- React (Vite)
- Node.js + Express
- MongoDB Atlas
- Deployed with Render and Vercel

## Features

- Create notes
- Edit notes
- Delete notes
- Persistent database
- Responsive UI

## Live Demo

- Frontend: [Live App](https://fullstack-notes-app-zeta.vercel.app/)
- Backend: [API](https://notes-backend-jyre.onrender.com/)

## Screenshots

![Home](assets/home.png)

![Create Note](assets/create.png)

![Edit Note](assets/edit.png)

## Tech Stack

- Frontend: React, Vite
- Backend: Express
- Database: MongoDB
- Deployment: Vercel, Render

## Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-url>
cd fullstack-app
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

4. Add your MongoDB connection string in a `.env` file inside `backend/`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

5. Run the backend:

```bash
cd backend
npm start
```

6. Run the frontend:

```bash
cd frontend
npm run dev
```

## Author

Ryan Abir
