const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send({
        message: 'Node.js and Express REST API',
        args: `.${req.query.page}`
    });
});

module.exports = router;