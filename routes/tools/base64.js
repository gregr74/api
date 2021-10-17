const fetch = require('node-fetch');
const imageToBase64 = require('image-to-base64');


module.exports = function(app, memory) {

    app.get('/base64', async (request, response) => {
        memory['requests']++
        if (!request.query.type) return response.send({ error: 'Вы не указали тип (decode/encode)' });
        if (!request.query.inputlink) return response.send({ error: 'Вы не указали ссылку' });

        const type = request.query.type;
        const link = request.query.inputlink;

        if(type=='encode') {
                imageToBase64(link)
                    .then( (res) => {
                        response.send({
                            input: link,
                            output: res
                        })
                        }
                    )
                    .catch(
                        (error) => {
                            response.send({
                                input: link,
                                output: error
                            })
                            console.log(error);
                        }
                    )
        }


    });
}