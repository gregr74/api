const express = require('express');
const router = express.Router();

let http = require('https');
try {
router.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API',
        args: `${request.query.page}`
    });
});

router.get('/discord', (request, response) => {
    if(!request.query.id) {response.send({error: 'Вы не указали ID пользователя'});}

    fetch('https://discord.com/users/'+request.query.id)
    .then(res => res.text())
    .then(body => console.log(body));

    apitype = request.query.type;
    //console.log(users_data);
    if(apitype == 'avatar') {
        response.send({
         data: '1',//JSON.stringify(users_data),
         apitype: apitype,
          id: `${request.query.id}`
     });
}});
    
} catch (error) {
  console.log(error);  
}
module.exports = router;