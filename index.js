const express = require("express");
const app = express();
const {createServer}  = require("node:http")

const { Server } = require('socket.io');

const server = createServer(app)




server.listen(4000,() => {
    console.log("server stardted ",);
})

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

 global.onlineUser = new Map()

 


  io.on('connection', (socket) => {
   
    socket.on('chat message', (msg) => {
        console.log(msg)
      io.emit('chat message', msg);
    });
  });


  
  