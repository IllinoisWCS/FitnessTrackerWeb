var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
});

router.get('/test', function(request, response) {
    response.sendFile(path.join(__dirname, '..', 'client', 'templates', 'test.html'));
});

module.exports = router;