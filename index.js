const http = require('http');
const port = 3001 || process.env.PORT;
const server = http.createServer();
server.on('request', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.end('Hello, server!')
})
server.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server is listening on port ${port}`)
})