require('dotenv').config();
const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const socketio = require('socket.io');

const authRoutes = require('./routes/auth');
const Message = require('./models/Message');

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'));

app.use(cors());
app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
}));

app.use('/api/auth', authRoutes);

// WebSocket logic
const users = {};

io.on('connection', (socket) => {
  console.log('User connected', socket.id);

  socket.on('joinRoom', ({ username, room }) => {
    socket.join(room);
    users[socket.id] = { username, room };
    io.to(room).emit('message', { sender: 'System', content: `${username} joined ${room}` });
  });

  socket.on('chatMessage', async ({ content }) => {
    const user = users[socket.id];
    if (user) {
      const msg = new Message({ sender: user.username, room: user.room, content });
      await msg.save();
      io.to(user.room).emit('message', { sender: user.username, content });
    }
  });

  socket.on('disconnect', () => {
    const user = users[socket.id];
    if (user) {
      io.to(user.room).emit('message', { sender: 'System', content: `${user.username} left the chat.` });
      delete users[socket.id];
    }
  });
});

server.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
