const fetch = require('node-fetch');

module.exports = function(app) {

    app.get('/instagram', async (request, response) => {
        if (!request.query.username) return response.send({ error: 'Вы не указали имя пользователя' });

        const username = request.query.username;
        let headers = {
            "Accept"       : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Content-Type" : "application/json; charset=utf-8",
            "User-Agent"   : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 OPR/79.0.4143.73"
        };

        response.send({
            id: request.query.username,
            data: await fetch(`https://www.instagram.com/${username}/?__a=1`, {
                method  : 'GET',
                credentials: 'include',
                headers : headers
            }).then(res=>res.text())
        });
    });
}