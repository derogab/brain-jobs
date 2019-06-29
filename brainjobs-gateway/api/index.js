module.exports = function (app, axios) {

    // forward all
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

};