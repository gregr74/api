const fetch = require('node-fetch');

module.exports = function(app) {

    app.get('/danbooru', async (req, res) => {
        if (!req.query.q) return res.send({error: 'Вы не указали запрос'});

        const danbooruURL = `https://danbooru.donmai.us/posts.json?random&tags=${req.query.q}&limit=1`

        const request = await fetch(danbooruURL);
        if (request.length <= 0) return res.status(404).send({ error: 'Картинки не найдено' });
        res.send({
            query: req.query.q,
            data: request[0].file_url
        });
    });

}