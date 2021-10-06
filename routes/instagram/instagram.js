const fetch = require('node-fetch');

module.exports = function(app) {

    app.get('/instagram', async (request, response) => {
        if (!request.query.username) return response.send({ error: 'Вы не указали имя пользователя' });

        const username = request.query.username;
        let headers = {
            "Accept"       : "application/json",
            "Content-Type" : "application/json",
            "User-Agent"   : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 OPR/79.0.4143.73"
        };
        console.log(await fetch(`https://www.instagram.com/${username}/?__a=1`, {
            method  : 'GET',
            headers : headers
        }).then(res=>res.text()));

        response.send({
            id: request.query.username,
            data: await fetch(`https://www.instagram.com/${username}/?__a=1`, {
                method  : 'GET',
                headers : headers
            }).then(res=>res.text())
        });
    });
}