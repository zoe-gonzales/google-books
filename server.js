const dotenv = require("dotenv");
dotenv.config();
const routes = require("./routes");
const mongoose = require("mongoose");
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const PORT = process.env.PORT || 3001;
 
io.on('connection', client => {
  client.on('notifyUser', () => {
    console.log('client is saving book to db ');
    client.emit('timer', new Date());
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || process.env.DB_URI, { useNewUrlParser: true });

server.listen(PORT, () => {
  console.log(`API server listing on port ${PORT}!`);
});