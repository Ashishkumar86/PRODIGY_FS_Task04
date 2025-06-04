# PRODIGY_FS_Task04
=--

# 🗨️ Real-Time Chat App

A simple real-time chat application with user authentication, chat rooms, and message storage using Node.js, Express, Socket.IO, and MongoDB.

## 🚀 Features

* 🔐 User registration and login
* 💬 Real-time messaging with WebSocket (Socket.IO)
* 🧑‍🤝‍🧑 Room-based chat system
* 💾 Persistent message storage in MongoDB
* 🛡️ Session management with `express-session` and `connect-mongo`

## 🛠️ Technologies Used

* **Backend:** Node.js, Express.js, Socket.IO
* **Database:** MongoDB with Mongoose
* **Frontend:** HTML + JavaScript
* **Authentication:** Sessions
* **Environment:** dotenv

## 📁 Project Structure

```
.
├── models/
│   ├── User.js         # User schema and password logic
│   └── Message.js      # Message schema
├── routes/
│   └── backend.js      # Authentication routes
├── public/
│   ├── login.html      # User login interface
│   ├── chat.html       # Main chat interface
├── server.js           # Main server file (Express + WebSocket)
├── .env                # Environment variables (Mongo URI, port, etc.)
```

## ⚙️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file and add:

```env
MONGO_URI=mongodb://localhost:27017/chatApp
SESSION_SECRET=supersecure
PORT=3000
```

4. **Run the server**

```bash
node server.js
```

Your app will run on `http://localhost:3000`.

## 🧪 API Endpoints

* `POST /api/auth/register` – Register a new user
* `POST /api/auth/login` – Log in existing user

## 🖥️ Usage

1. Open `login.html` in a browser.
2. Register or log in.
3. You'll be redirected to `chat.html`.
4. Join a room, send messages, and enjoy chatting!

## 📸 Screenshots

*Add screenshots here if desired.*

## 📝 License

MIT License. Feel free to use, modify, and distribute.

---

