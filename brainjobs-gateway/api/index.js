module.exports = function (app, axios) {

    // forward all get requests
    app.get("/brainjobs-gateway/api/v1/*", (req, res) => {

        var redirect = 'http://localhost:8080' + req.originalUrl.replace('gateway', 'backend');

        axios({
            method: 'get',
            url: redirect,
            responseType: 'json'
        })
        .then(function (response) {

            console.log(response);
        
            res.set({
                'Access-Control-Allow-Origin': '*'                
            });
        
            res.json(response.data);

        })
        .catch(function (error) {
            console.log(error);
            res.json({'error': ''+error});
        });       
        
    });

    // forward all post requests
    app.post("/brainjobs-gateway/api/v1/*", (req, res) => {

        var redirect = 'http://localhost:8080' + req.originalUrl.replace('gateway', 'backend');       
        var forward_data = req.body;

        axios({
            method: 'post',
            url: redirect,
            responseType: 'json',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: forward_data
        })
        .then(function (response) {

            //console.log(response);
        
            res.set({
                'Access-Control-Allow-Origin': '*'                
            });
            console.log('GATEWAY: ');
            console.log(req.body);
            res.json(response.data);

        })
        .catch(function (error) {
            console.log(error);
            res.json({'error': ''+error});
        });  

    });
    
};