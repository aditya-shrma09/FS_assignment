# 📝 Sticky Notes App — MERN Stack

A simple **single-page Sticky Notes application** built using the **MERN Stack** (MongoDB, Express, React, Node.js).

This project demonstrates full-stack development concepts including REST APIs, database integration, and frontend–backend communication.

---

## 🚀 Project Overview

This application allows users to:

* Create notes
* View saved notes
* Store notes permanently in MongoDB
* Interact with a real backend API

All operations happen on a **single dashboard page**, similar to Google Keep.

---

## 🧱 Tech Stack

**Frontend**

* React (Vite)
* Axios
* JavaScript
* HTML & CSS

**Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

---

## 📂 Project Structure

```
FS_assignment/
│
├── server/          → Backend (Node + Express)
│   ├── models/
│   │      notes.js
│   ├── routes/
│   │     noteRoutes.js
│   ├── server.js
│   └── .env
│
└── client/          → Frontend (React + Vite)
    ├── src/
    │    App.jsx
    │    main.jsx
    └── package.json
```

---

## ⚙️ Prerequisites

Make sure the following are installed:

* Node.js (v18 or above)
* npm
* MongoDB Atlas account (or local MongoDB)

---

## 🔑 Environment Setup

Create a `.env` file inside the **server** folder.

```
MONGO_URI=your_mongodb_connection_string
```

Example:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notes
```

---

## 🖥️ How to Run the Project

### 1️⃣ Clone the Repository

```
git clone <repository-url>
cd FS_assignment
```

---

### 2️⃣ Install Backend Dependencies

```
cd server
npm install
```

---

### 3️⃣ Start Backend Server

```
node server.js
```

Expected output:

```
MongoDB Connected
Server started on port 5000
```

Backend runs at:

```
http://localhost:5000
```

---

### 4️⃣ Install Frontend Dependencies

Open a new terminal:

```
cd client
npm install
```

---

### 5️⃣ Start Frontend

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🧪 Testing the Application

1. Open the frontend URL in browser.
2. Enter note title and content.
3. Click **Add Note**.
4. Note appears instantly on dashboard.
5. Refresh page → notes remain saved (MongoDB persistence).

---

## 🔌 API Endpoints

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/notes` | Fetch all notes   |
| POST   | `/notes` | Create a new note |

---

## 📸 Features Implemented

* REST API using Express
* MongoDB database integration
* React single-page interface
* Axios API communication
* Persistent data storage

---

## 🎯 Learning Outcomes

This project demonstrates:

* MERN stack architecture
* Backend API development
* Database schema design
* Frontend state management
* Client–server communication

##
