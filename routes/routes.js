const { Client } = require('discord.js')
const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API'
    });
});

router.get('/discord', async (request, response) => {
    if(!request.query.type) return response.send({ error: 'Вы не указали тип, используйте user или avatar' });
    if(!request.query.id) return response.send({ error: 'Вы не указали ID пользователя' });
    const client = new Client()
    await client.login('NTgwMDUzMDA5MDc4Mjg4Mzk0.XOLGdg.jcA_4VkUYhJxOLO5nxvPGd8oUhk');

    const id = request.query.id;
    const apiType = request.query.type;

    let fetchUser;
    try {
       fetchUser = await client.users.fetch(id);
    } catch (err) {
        return response.send({ error: 'Указан неверный ID' });
    }

    if(apiType === 'user') response.send({
        id: request.query.id,
        data: fetchUser,
        apiType,
    });

    if(apiType === 'avatar') {
        response.send({
            id: request.query.id,
            data: fetchUser.displayAvatarURL({ dynamic: true, format: 'png' }),
            apiType
        })
     }
});

router.use(function(req, res){
    res.status(404).json({ error: 'Страница не найдена' });
});

module.exports = router;