const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Côté navigateur
const server = http.createServer((req, res) => {

    // console.log('req', req);

    // rawHeaders: [
    //     'Host',
    //     '127.0.0.1:3000',
    //     'Connection',
    //     'keep-alive',
    //     'Cache-Control',
    //     'max-age=0',
    //     'sec-ch-ua',
    //     '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
    //     'sec-ch-ua-mobile',
    //     '?0',
    //     'sec-ch-ua-platform',
    //     '"Windows"',
    //     'Upgrade-Insecure-Requests',
    //     '1',
    //     'User-Agent',
    //     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
    //     'Accept',
    //     'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    //     'Sec-GPC',
    //     '1',
    //     'Accept-Language',
    //     'fr-FR,fr',
    //     'Sec-Fetch-Site',
    //     'none',
    //     'Sec-Fetch-Mode',
    //     'navigate',
    //     'Sec-Fetch-User',
    //     '?1',
    //     'Sec-Fetch-Dest',
    //     'document',
    //     'Accept-Encoding',
    //     'gzip, deflate, br'
    //   ],


    console.log('res', res);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    // Côté serveur
    console.log(`Server running at http://${hostname}:${port}/`);
});
