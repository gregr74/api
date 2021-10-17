const fetch = require('node-fetch');

const tenorKey = 'SDN6P5XCUNE1';

module.exports = function(app, memory) {

    app.get('/tenor', async (req, res) => {
        memory['requests']++
        if (!req.query.q) return res.send({error: 'Вы не указали запрос'});
        const tenorURL = `https://api.tenor.com/v1/random?q=${req.query.q}&key=${tenorKey}&limit=1`;

        const request = await fetch(tenorURL).then(res => res.json());

        if (request.status === '404') return res.status(404).send({ error: 'Картинки не найдено' });

        res.send({
            query: req.query.q,
            data: request.results[0].media[0].gif.url
        });
    });

}