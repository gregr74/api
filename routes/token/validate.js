const mysql = require("mysql2");


module.exports = function(app, memory) {

    app.get('/validate', async (request, response) => {
        memory['requests']++
        if (!request.query.token) return response.send({ error: 'Вы не указали токен для проверки' });
        const env_mysql = process.env.mysql;
        let credintals = env_mysql.split(';');
        const connection = mysql.createConnection({
            host: credintals[0],
            user: credintals[1],
            database: credintals[3],
            password: credintals[2]
        });

        const token = request.query.token;

        connection.connect(function(err){
            if (err) {
                response.send({
                    type: "error",
                    msg: err.message
                });
            }
            else{
                connection.query(
                    'SELECT * FROM `api_keys` WHERE `token` = "' + token + '"',
                    function(err, results, fields) {
                        response.send({
                            type: "success",
                            msg: results
                        });
                    }
                );
            }
        });

    });
}
