const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

var express = require('express'),
    app = express(),
    port = 8080;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ requests: [] }).write();     

console.log('Web server started on: ' + port);

// API
require(__dirname + '/api')(app, db);

// FRONT-END
app.use('/brainjobs-frontend', express.static('../brainjobs-frontend/'));