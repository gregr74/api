const express = require('express');
const router = express.Router();
const {Client} = require('discord.js')

try {
router.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API',
        args: `${request.query.page}`
    });
});

router.get('/discord', (request, response) => {
    if(!request.query.id) {response.send({error: 'Вы не указали ID пользователя'});}
    const token = 'NTgwMDUzMDA5MDc4Mjg4Mzk0.XOLGdg.jcA_4VkUYhJxOLO5nxvPGd8oUhk';
    const client = new Client()
    client.login(token);
id = request.query.id;
const fetchUser = client.users.fetch(id);
const usr = message.guild.cache.get(id);
console.log(usr);
    apitype = request.query.type;
    //console.log(users_data);
    if(apitype == 'avatar') {
        response.send({
         data: fetchUser,//JSON.stringify(users_data),
         apitype: apitype,
          id: `${request.query.id}`
     });
}});
    
} catch (error) {
  console.log(error);  
}
module.exports = router;