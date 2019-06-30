const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

var express = require('express');

// backend
var app_backend = express();
var port_backend = 8082;
// frontend
var app_frontend = express();
var port_frontend = 8081;


var bodyParser = require('body-parser');
app_backend.use(bodyParser.urlencoded({ extended: false }));

app_backend.listen(port_backend);
app_frontend.listen(port_frontend);

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ requests: [] }).write();     

console.log('Web Server started.');
console.log('API started on: ' + port_backend);
console.log('Static index on: ' + port_frontend);

// API
require(__dirname + '/api')(app_backend, db);

// FRONT-END
app_frontend.use('/brainjobs-frontend', express.static('../brainjobs-frontend/'));