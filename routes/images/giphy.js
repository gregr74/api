const fetch = require('node-fetch');

const giphyKey = 'C7bImfPsbaRlYZKx0o7iJw6OHHzk4sz0';

module.exports = function(app, memory) {

    app.get('/giphy', async (req, res) => {
        memory['requests']++
        if (!req.query.q) return res.send({error: 'Вы не указали запрос'});
        const giphyURL = `https://api.giphy.com/v1/gifs/random?api_key=${giphyKey}&tag=${req.query.q}&rating=r`;

        const request = await fetch(giphyURL).then(res => res.json());
        if (request.meta.status === '404') return res.status(404).send({ error: 'Картинки не найдено' });
        res.send({
            query: req.query.q,
            data: request.data.image_url
        });
    });

}