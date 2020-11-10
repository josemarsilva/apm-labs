const http = require('http');
const url = require('url');

const data = require('./data')

const server = http.createServer((req, res) => {
    const urlParts = url.parse(req.url);
    console.log(urlParts)
});

server.listen(3000, () => console.info('Server is up on port 3000'));