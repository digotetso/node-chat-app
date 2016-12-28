const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

//create dynamic port
var port = process.env.PORT || 3000;
const publicpath = path.join(__dirname, '../public');

var  app = express();
var server = http.createServer(app); // create server with http
var io = socketIO(server); // config server to work with socket.io

io.on('connection', (socket)=>{  // connection let u listen to new connection and do somthing abot it
  console.log('New user');
  socket.on('disconnect', ()=>{
    console.log('disconnected from client');
  })
  //emit event
  socket.emit('newMessage', {from: 'Digotetso', text: 'Hey there', createAt: '10:00'});
  //Listen for event
  socket.on('createMessage', function (message) {
    console.log(message);
  } );

});


app.use(express.static(publicpath)); //config static path to server  public folder
server.listen(3000, ()=>{
  console.log(`Server up on port ${port}`);
});
