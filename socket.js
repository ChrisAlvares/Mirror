module.exports = function(io) {
    io.sockets.on('connection', function (socket) {
        socket.emit('connected');

        socket.on('scroll', function(data) {
            console.log('needs to scroll', data);
            io.sockets.emit('scroll', data);
        });
    });
}
