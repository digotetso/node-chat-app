var socket = io(); // io(); its vailable in the libary i loaded in
socket.on('connect', ()=> {
  console.log('Connected to server');
});
socket.on('disconnect', ()=> {
  console.log('disconnected from server');
})
//listen for event
socket.on('newMessage', function (message) {
  console.log(message);
});
