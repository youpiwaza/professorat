const http = require('node:http');

// @see     https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener

// Create a local server to receive data from
const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // On envoi en contenu "au navigateur"
    res.end(
        // On transformer du JSON en texte
        JSON.stringify(
            // Objet
            {
                data: 'Hello World!',
            }
        )
    );
    
});

server.listen(8000, '127.0.0.1'); 