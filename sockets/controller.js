const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id)
    })

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 12314343; // simulamos la creacion de un id de la bbdd
        callback({payload, id, fecha: new Date().getTime()});
        socket.broadcast.emit('enviar-mensaje', payload);
    })
}

module.exports = {
    socketController
}