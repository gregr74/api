const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

require('./routes')(app);

app.get('/', (request, response) => {
    response.send({
        message: "Welcome to the VOID api",
        docs: "https://docs.void.cf/",
        version: "1.4.0b"
    });
});

app.get('/wakemydyno.txt', (request, response) => {
    response.set('Content-Type', 'text/plain').send('Lorem ipsum dolor sit amet');
});

app.use((req, res) => {
    res.status(404).json({ error: 'Страница была не найдена или перемещена по новому адресу.' });
});


const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});
