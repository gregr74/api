const fs = require('fs');
const path = require('path');
let memory = {
    'requests': 0
};

app.get('/stats', (request, response) => {
    response.send({
        "requests": memory['requests']
    });
});

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
    const files = readDir(__dirname);
    files.filter(file => !file.endsWith('index.js')).forEach(file => {
        require(file)(app);
    })
    memory['requests']++
}