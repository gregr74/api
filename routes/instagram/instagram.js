const fetch = require('node-fetch');

module.exports = function(app, memory) {

    app.get('/instagram', async (request, response) => {
        memory['requests']++
        if (!request.query.username) return response.send({ error: 'Вы не указали имя пользователя' });

        const username = request.query.username;
        let headers = {
            "Accept"       : "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Content-Type" : "application/json; charset=utf-8",
            "User-Agent"   : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36 OPR/79.0.4143.73",
            "sec-ch-ua-platform": "Windows",
            "cookie": "ig_did=214E4FD3-5F70-45FF-AB63-85D9DA27B692; ig_nrcb=1; mid=YO6OeQALAAHba4OKYkGPaXZTn9-c; csrftoken=cVhBNziOZcJbKGjNYqkxbYLAcXg4zk6B; ds_user_id=8763306612; sessionid=8763306612:nUkrRKbEbbl5SK:20; shbid=\"11284\\0548763306612\\0541665081668:01f74f5cab5fc2620483de2effbc8e9e897318dc9a0cf1ed33b226d717187fe4aca0687b\"; shbts=\"1633545668\\0548763306612\\0541665081668:01f771e01c3b83989ca60a7dfbdce4129bc5754d302d4b940a0ce5228cfa83b093917002\"; rur=\"ASH\\0548763306612\\0541665089943:01f79eb7fff2afeff2fef9c7209edd6ee1fbc427565f31c417a08aa35e485653ac2cf766\""
        };

        response.send({
            id: request.query.username,
            data: await fetch(`https://www.instagram.com/${username}/?__a=1`, {
                method  : 'GET',
                credentials: 'include',
                headers : headers
            }).then(res=>res.json())
        });
    });
}