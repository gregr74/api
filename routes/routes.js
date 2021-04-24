const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

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

    const fetchUser = async id => {
        const response = await fetch(`https://discord.com/api/v8/users/${id}`, {
          headers: {
            Authorization: `Bot ${token}`
          }
        })
        if (!response.ok) throw new Error(`Error status code: ${response.status}`)
        return JSON.parse(await response.json())
      }
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