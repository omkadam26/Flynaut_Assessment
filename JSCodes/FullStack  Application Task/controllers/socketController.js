// index.js or server.js

const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A new client has connected');

  // Emit an event from the server to the client
  socket.emit('message', 'Welcome to the chat');

  // Listen for events emitted from the client
  socket.on('chatMessage', (message) => {
    console.log(`Received message: ${message}`);

    // Broadcast the received message to all connected clients
    io.emit('message', message);
  });

  // Disconnect event handling
  socket.on('disconnect', () => {
    console.log('A client has disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
