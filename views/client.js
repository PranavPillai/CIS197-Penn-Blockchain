var socket = io.connect('http://localhost:3000/forum');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
