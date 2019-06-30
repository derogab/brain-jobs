var express = require('express'),
    app = express(),
    port = 8082;

const axios = require('axios');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);

console.log('Gateway started on: ' + port);

// API
require(__dirname + '/api')(app, axios);