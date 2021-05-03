const query = require('samp-query')

module.exports = function(app) {

    app.get('/samp', async (request, response) => {
        let validtoken = 'M9GouX7JatMwqUytQSpxrwAtHzOA1zXx070l51uorFyZMmDLBvwt8HWUaKmL2vPTDEnGMeIPZMIenkCrYzMy3S2P2SV1UT';
        if (!request.query.ip) return response.send({ error: 'Вы не указали IP сервера' });
        if (!request.query.port) return response.send({ error: 'Вы не указали порт сервера' });
        if (request.query.token !== validtoken) return response.send({ error: 'Вы указали не верный token' });
        
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