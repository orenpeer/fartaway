// import Pusher from 'pusher-js/react-native';

// Pusher.logToConsole = true;
// var pusher = new Pusher('80e15996db64e9e64983', {
//   cluster: 'eu',
//   encrypted: true
// });

// var channel = pusher.subscribe('fart-channel');
// channel.bind('fart-event', function(data) {
//   alert(data.message);
// });

var express = require('express');
var http = require('http')
var socketio = require('socket.io');

var app = express();
var server = http.Server(app);
var websocket = socketio(server);
server.listen(3000, () => console.log('listening on *:3000'));

// The event will be called when a client is connected.
websocket.on('connection', (socket) => {
  console.log('A client just joined on', socket.id);
});