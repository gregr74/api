const fetch = require('node-fetch');
const axios = require('axios');

module.exports = function(app) {

    app.get('/instagram', async (request, response) => {
        if (!request.query.username) return response.send({ error: 'Вы не указали имя пользователя' });

        const username = request.query.username;
        let headers = {
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
            "User-Agent"   : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 OPR/79.0.4143.73"
        };

        axios.get(`https://www.instagram.com/${username}/?__a=1`, {
            headers: headers
        }).then(function (res) {
            response.send({
                id: request.query.username,
                data: res.data
            });
        });


    });
}