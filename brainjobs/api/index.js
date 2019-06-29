const uuidv4 = require('uuid/v4');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001;

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port);

const adapter = new FileSync('db.json');
const db = low(adapter);

console.log('Web server started on: ' + port);

// Set some defaults (required if your JSON file is empty)
db.defaults({ requests: [] }).write();    

app.post("/api/v1/users/:user_id/jobs", (req, res) => { 

    // other params
    var job_id = uuidv4();
    var created_at = new Date();
    var status = 'created';
    
    // request
    var request = {
        user_id: req.params.user_id,
        title: req.body.title,
        language: req.body.language,
        framework: req.body.framework,
        dataset: req.body.dataset,
        dataset_type: req.body.dataset_type,
        model: req.body.model,
        status: status,
        created_at: created_at,
        job_id: job_id
    };

    // save this request
    db.get('requests').push(request).write();

    res.set({
        'Access-Control-Allow-Origin': '*',
        
        // Other params
        'Status': status,
        'Created_at': created_at,
        'Location': job_id
                
    });
    // render risposta
    res.status(201).location(job_id).json(request);

});

app.get("/api/v1/jobs", (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*'                
    });

    res.json(db.get('requests').value());

});

app.get("/api/v1/jobs/:job_id", (req, res) => {

    res.set({
        'Access-Control-Allow-Origin': '*'                
    });

    res.json(db.get('requests').find({ job_id: req.params.job_id }).value());

});