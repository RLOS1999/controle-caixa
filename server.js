const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public')); // Define a pasta pública

io.on('connection', (socket) => {
    console.log('Novo usuário conectado:', socket.id);

    socket.on('update-table', (data) => {
        socket.broadcast.emit('update-table', data); // Sincroniza alterações
    });

    socket.on('clear-table', () => {
        socket.broadcast.emit('clear-table'); // Limpa a tabela para todos
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado:', socket.id);
    });
});

server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
