const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API',
        args: `${request.query.page}`
    });
});

router.get('/discord', (request, response) => {
    if(!request.query.id) {response.send({error: 'Вы не указали ID пользователя'});}

    apitype = request.query.type;
    if(apitype == 'avatar') {
        response.send({
         data: 'DiscordAPI',
         apitype: apitype,
          id: `${request.query.id}`
     });
}});

module.exports = router;