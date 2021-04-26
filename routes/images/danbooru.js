const fetch = require('node-fetch');

module.exports = function(app) {

    app.get('/danbooru', async (req, res) => {
        if (!req.query.q) return res.send({error: 'Вы не указали запрос'});

        const danbooruURL = `https://danbooru.donmai.us/posts.json?random&tags=${req.query.q}&limit=100`
        const random = Math.floor(Math.random() * 99);

        const request = await fetch(danbooruURL).then(res => res.json());
        if (request.length <= 0) return res.status(404).send({ error: 'Картинки не найдено' });
        res.send({
            query: req.query.q,
            data: request[random].file_url
        });
    });

}