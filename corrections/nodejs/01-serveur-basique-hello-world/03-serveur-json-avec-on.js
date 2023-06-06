const http = require('node:http');

// Create a local server to receive data from
//                              Pas de paramètres
const server = http.createServer();

// Listen to the request event
//      "on" > Rajouter un écouteur
//          On écoute pour une requête > ~= lorsque quelqu'un ou quelque chose communique avec le serveur
server.on('request', (request, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});

server.listen(8000);