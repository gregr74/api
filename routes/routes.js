const express = require('express');
const router = express.Router();

let http = require('http');

let options = {
    host: 'discordapp.com',
    path: '/api/users/',
    headers: {'Authorization': 'Bot NTgwMDUzMDA5MDc4Mjg4Mzk0.XOLGdg.jcA_4VkUYhJxOLO5nxvPGd8oUhk'}
};
let users_data = http.request(options).end();

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
         data: users_data,
         apitype: apitype,
          id: `${request.query.id}`
     });
}});

module.exports = router;