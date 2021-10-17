const { Client } = require('discord.js');
let mem = memory;
module.exports = function(app) {

    app.get('/discord', async (request, response) => {
        mem['requests']++
        if (!request.query.type) return response.send({ error: 'Вы не указали тип, используйте user или avatar' });
        if (!request.query.id) return response.send({ error: 'Вы не указали ID пользователя' });
        const client = new Client();
        await client.login('NTgwMDUzMDA5MDc4Mjg4Mzk0.XOLGdg.jcA_4VkUYhJxOLO5nxvPGd8oUhk');

        const id = request.query.id;
        const apiType = request.query.type;

        let fetchUser;
        try {
           fetchUser = await client.users.fetch(id);
        } catch (err) {
            console.log(err);
            return response.send({ error: 'Указан неверный ID' });
        }
        
        if (apiType === 'user') {
            const dynamicavatar = fetchUser.displayAvatarURL({ dynamic: true, format: 'png' });
            const staticavatar = fetchUser.displayAvatarURL();
            fetchUser = JSON.stringify(fetchUser).replace(staticavatar, dynamicavatar).replace(staticavatar, dynamicavatar);
            fetchUser = JSON.parse(fetchUser);
            return response.send({
                id: request.query.id,
                data: fetchUser,
                apiType,
            });
        }

        if (apiType === 'avatar') {
            response.send({
                id: request.query.id,
                data: fetchUser.displayAvatarURL({ dynamic: true, format: 'png' }),
                apiType
            });
         }
    });
}