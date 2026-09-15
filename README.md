# Prachi Portfolio

A modern personal portfolio website built with the MERN stack, designed to showcase a developer profile, projects, skills, and contact details. The project combines a responsive React frontend with an Express + MongoDB backend for handling form submissions.

## Live Project Overview

This portfolio includes:

- Animated landing page with a dynamic intro section
- About section highlighting developer profile and goals
- Skills section with progress bars
- Projects page with project cards and detail routes
- Contact form connected to the backend API
- Clean, responsive UI for desktop and mobile devices
- Social media and resume CTA buttons

## Tech Stack

### Frontend
- React.js
- React Router
- CSS
- AOS for scroll animations
- React Icons
- React Type Animation

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv

## Project Structure

```bash
MERN Portfolio/
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── .git/
└── README.md
```

## Features

### Portfolio UI
- Elegant hero section with typewriter-style text
- Clean navigation between Home, About, Skills, Projects, and Contact pages
- Reusable and structured React component design

### Project Showcase
- Project cards with details and individual route pages
- Smooth navigation between the projects list and selected project detail view

### Contact Integration
- Contact form captures name, email, and message
- Form is submitted to the backend API
- Data is saved into MongoDB

## Backend API

The backend exposes a contact endpoint:

```http
POST /api/contact
```

Request body:

```json
{
  "name": "Prachi",
  "email": "prachi@example.com",
  "message": "Hello, I would like to work together."
}
```

## Database Configuration

The current backend connects to MongoDB at:

```bash
mongodb://127.0.0.1:27017/portfolioDB
```

Make sure MongoDB is running locally before starting the backend.

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd "MERN Portfolio"
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

## Running the Project

### Start the backend

From the backend folder:

```bash
node server.js
```

If you prefer live reload during development:

```bash
npx nodemon server.js
```

### Start the frontend

From the frontend folder:

```bash
npm start
```

The React app will run on:

```bash
http://localhost:3000
```

The backend API will run on:

```bash
http://localhost:5000
```

## Environment Setup

This project currently uses a local MongoDB connection directly in the backend, but for production usage you can upgrade it to use environment variables like:

```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolioDB
```

## Important Notes

- The frontend contact form sends requests to `http://localhost:5000/api/contact`.
- The backend must be running when submitting messages.
- The project is ideal as a personal portfolio or developer profile website.

## Future Improvements

- Add login/admin dashboard for managing projects and messages
- Add file upload support for portfolio images or resumes
- Move database configuration to environment variables
- Add animation enhancements and dark mode
- Deploy frontend to Netlify/Vercel and backend to Render/Railway

## Author

Prachi

## License

This project is currently for educational and portfolio purposes.
