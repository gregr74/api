const fetch = require('node-fetch');
function isJSON(str) { try { return (JSON.parse(str) && !!str); } catch (e) { return false; }}

module.exports = function(app, memory) {
    app.get('/pinger', async (request, response) => {
        const array = {}; array.online = []; array.offline = []; let i = 0; memory['requests']++
        if (!request.query.data) return response.send({ error: 'Вы не указали входные данные' });

        const data = request.query.data;
        let proxy = request.query.proxy || null;
        if(!isJSON(data)) {return response.send({"error": "Данные которые вы предоставили не являются JSON"})}
        let json = JSON.parse(data);
        json.forEach(website=>{
            const request = require('request');
            let proxy_request = request;
            if(proxy !== null) proxy_request = request.defaults({'proxy': proxy});
            proxy_request({
                url:  website,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36'
                },
                timeout: 1500
            }, function (error, resp, body) {
                if (!error) {i++;
                    array.online.push(website);
                    console.log(`${website} online [${resp.statusCode}]`);
                } else {i++;
                    array.offline.push(website);
                    console.log(`${website} offline [${error.code}]`);
                }
                if(i==json.length) response.send(array);
            })
        })


    });
}