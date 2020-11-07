var http = require('http');

http.createServer(function(req,res){
    res.end('Hello Simple HTTP Server');
}).listen(3000);