const express = require('express');
const router = express.Router();
const {Client} = require('discord.js')

try  {
router.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API',
        args: `${request.query.page}`
    });
});

router.get('/discord', async (request, response) => {
    if(!request.query.id) {response.send({error: 'Вы не указали ID пользователя'});}
    const client = new Client()
    client.login('NTgwMDUzMDA5MDc4Mjg4Mzk0.XOLGdg.jcA_4VkUYhJxOLO5nxvPGd8oUhk');
    id = request.query.id;
    const fetchUser = await client.users.fetch(id);
    apitype = request.query.type;

    if(apitype == 'user') {
        response.send({
         data: fetchUser,//JSON.stringify(users_data),
         apitype: apitype,
          id: `${request.query.id}`
     });

     if(apitype == 'avatar') {
        response.send({
         data: fetchUser.displayAvatarURL,//JSON.stringify(users_data),
         apitype: apitype,
          id: `${request.query.id}`
     })};

}});
    
} catch (error) {
  console.log(error);  
}
module.exports = router;