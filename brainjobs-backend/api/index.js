module.exports = function (app, db) {

    app.post("/brainjobs-backend/api/v1/users/:user_id/jobs", (req, res) => { 
        
        var uuidv4 = require('uuid/v4');

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
            dataset_datatype: req.body.dataset_datatype,
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
    
    app.get("/brainjobs-backend/api/v1/jobs", (req, res) => {
    
        res.set({
            'Access-Control-Allow-Origin': '*'                
        });
    
        res.json(db.get('requests').value());
    
    });
    
    app.get("/brainjobs-backend/api/v1/jobs/:job_id", (req, res) => {
    
        res.set({
            'Access-Control-Allow-Origin': '*'                
        });
    
        res.json(db.get('requests').find({ job_id: req.params.job_id }).value());
    
    });

};