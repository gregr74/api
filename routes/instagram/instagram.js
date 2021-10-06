const fetch = require('node-fetch');

module.exports = function(app) {

    app.get('/instagram', async (request, response) => {
        if (!request.query.username) return response.send({ error: 'Вы не указали имя пользователя' });

        const username = request.query.username;

        await fetch(`https://www.instagram.com/${username}/?__a=1`).then(data=>{
            response.send({
                id: request.query.username,
                data: data
            });
        })

    });
}