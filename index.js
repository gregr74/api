const port = process.env.PORT || 3001;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.get('/', (request, response) => {
    console.log(`URL: ${request.url}`);
    response.send({message: 'Node.js and Express REST API'});
});

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});