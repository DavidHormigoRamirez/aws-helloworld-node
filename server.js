const { hostname } = require('os');
const http = require('http');

const message = "<h1>Hola Mundo</h1>";
const port = 8080;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type',"text/html");
    res.end(message);
});

server.listen(port, hostname, () => {
    console.log(`Servidor corriendo en http://${hostname()}:${port}/`);
});

