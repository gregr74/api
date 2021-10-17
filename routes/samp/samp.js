const query = require('samp-query')

module.exports = function(app, memory) {

    app.get('/samp', async (request, response) => {
        memory['requests']++
        if (!request.query.ip) return response.send({ error: 'Вы не указали IP сервера' });
        if (!request.query.port) return response.send({ error: 'Вы не указали порт сервера' });
        
        const ip = request.query.ip;
        const port = request.query.port;
        const options = {
            host: ip,
            port: port
        }
        query(options, function (error, data) {
            if(error) { 
            response.send({
                ip: request.query.ip,
                error: error
            });
            } else {
            response.send({
                ip: request.query.ip,
                data: data
            });
        }})
    });
}
