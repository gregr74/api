const { Client } = require('discord.js');

module.exports = function(app) {

    app.get('/darling', async (request, response) => {
        if (!request.query.ip) return response.send({ error: 'Вы не указали IP сервера' });
        if (!request.query.port) return response.send({ error: 'Вы не указали порт сервера' });
        if (!request.query.token) return response.send({ error: 'Вы не указали порт сервера' });
        
        const ip = request.query.ip;
        const port = request.query.port;

            response.send({
                id: request.query.id,
                data: fetchUser.displayAvatarURL({ dynamic: true, format: 'png' }),
                apiType
            });
    });
}