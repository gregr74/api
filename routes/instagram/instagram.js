const fetch = require('node-fetch');

module.exports = function(app) {

    app.get('/instagram', async (request, response) => {
        if (!request.query.username) return response.send({ error: 'Вы не указали имя пользователя' });

        const username = request.query.username;
console.log(await fetch(`https://www.instagram.com/${username}/?__a=1`).then(res=>res.text()));
        response.send({
            id: request.query.username,
            data: await fetch(`https://www.instagram.com/${username}/?__a=1`).then(res=>res.text())
        });
    });
}