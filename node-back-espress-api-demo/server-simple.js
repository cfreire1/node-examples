const http = require('http');

const server = http.createServer((req,res) => {
    res.end('hola mundo');
});

server.listen(3000,() =>{
   console.log('server port 3000');
});