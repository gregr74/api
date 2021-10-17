const fs = require('fs');
const path = require('path');

let memory = {
    'requests': 0
};

function readDir (directory) {
    const result = [];

    (function read (dir) {
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const filepath = path.join(dir, file);

            if (fs.statSync(filepath).isDirectory()) {
                read(filepath);
            } else {
                result.push(filepath);
            }
        }
    }(directory));

    return result;
}

module.exports = function(app){
    app.get('/stats', (request, response) => {
        response.send({
            "requests": memory['requests'],
            "cpu_usage": process.cpuUsage(),
            "memory_usage": Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100
        });
    });

    const files = readDir(__dirname);
    files.filter(file => !file.endsWith('index.js')).forEach(file => {
        require(file)(app);
    })
    memory['requests'] = memory['requests']+1;
}