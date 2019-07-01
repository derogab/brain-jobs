const API = "http://localhost:8080/brainjobs-gateway/api/v1/";

$(document).ready(function() {

    // get all requests
    $("#get-all-requests").click(function(e){
        e.preventDefault(); 

        var user_id = $("#user_id_search").val();

        if( !user_id ) {
            $('#results').html('<div class="alert alert-warning alert-dismissible fade show" role="alert">'
                +'<strong>Warning!</strong> Compila il campo user_id.'
                +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                    +'<span aria-hidden="true">&times;</span>'
                +'</button>'
            +'</div>');
        }
        else {

            $.ajax({

                type: "GET",
                url: API + 'jobs?user_id=' + user_id,
                dataType: "json",
                success: function(data) {
    
                    

                    if(data.length == 0){
                        $('#results').html('<div class="alert alert-warning alert-dismissible fade show" role="alert">'
                                +'<strong>Warning!</strong> Nessuna richiesta per lo user selezionato.'
                                +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                                    +'<span aria-hidden="true">&times;</span>'
                                +'</button>'
                            +'</div>');
                    }
                    else{

                        var result = "";

                        $(data).each(function(index, item) {
                            result += "<i>Richiesta " + (index+1) + "</i> <br> ";
                            result += "user_id: " + item.user_id + " <br> ";
                            result += "title: " + item.title + " <br> ";
                            result += "language: " + item.language + " <br> ";
                            result += "framework: " + item.framework + " <br> ";
                            result += "dataset: " + item.dataset + " <br> ";
                            result += "dataset_datatype: " + item.dataset_datatype + " <br> ";
                            result += "model: " + item.model + " <br> ";
                            result += "status: " + item.status + " <br> ";
                            result += "created_at: " + item.created_at + " <br> ";
                            result += "job_id: " + item.job_id + " <br> ";
                            result += "<br>";
        
                        });
        
                        $('#results').html('<div class="alert alert-info alert-dismissible fade show" role="alert">'
                            +'<strong>Dati richiesti</strong> <br><br>'+result
                            +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                                +'<span aria-hidden="true">&times;</span>'
                            +'</button>'
                        +'</div>');

                    }

                    
                },
                error: function() {
                    $('#results').html('<div class="alert alert-danger alert-dismissible fade show" role="alert">'
                        +'<strong>Errore!</strong> Si è verificato un errore durante l\'invio della richiesta.'
                        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                            +'<span aria-hidden="true">&times;</span>'
                        +'</button>'
                    +'</div>');
                }
    
            });

        } 

    });

    // get single request
    $("#get-single-request").click(function(e){
        e.preventDefault(); 

        var job_id = $("#job_id").val();

        if( !job_id ) {
            $('#results').html('<div class="alert alert-warning alert-dismissible fade show" role="alert">'
                +'<strong>Warning!</strong> Compila il campo job_id.'
                +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                    +'<span aria-hidden="true">&times;</span>'
                +'</button>'
            +'</div>');
        }
        else {

            $.ajax({

                type: "GET",
                url: API + 'jobs/' + job_id,
                dataType: "json",
                success: function(data) {
                    
                    if(!data){
                        $('#results').html('<div class="alert alert-warning alert-dismissible fade show" role="alert">'
                                +'<strong>Warning!</strong> Questo job_id non esiste.'
                                +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                                    +'<span aria-hidden="true">&times;</span>'
                                +'</button>'
                            +'</div>');
                    }
                    else{

                        var result = "";
                        result += "user_id: " + data.user_id + " <br> ";
                        result += "title: " + data.title + " <br> ";
                        result += "language: " + data.language + " <br> ";
                        result += "framework: " + data.framework + " <br> ";
                        result += "dataset: " + data.dataset + " <br> ";
                        result += "dataset_datatype: " + data.dataset_datatype + " <br> ";
                        result += "model: " + data.model + " <br> ";
                        result += "status: " + data.status + " <br> ";
                        result += "created_at: " + data.created_at + " <br> ";
                        result += "job_id: " + data.job_id + " <br> ";
                        result += "<br>";
        
                        $('#results').html('<div class="alert alert-info alert-dismissible fade show" role="alert">'
                            +'<strong>Dati richiesti</strong> <br><br>'+result
                            +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                                +'<span aria-hidden="true">&times;</span>'
                            +'</button>'
                        +'</div>');

                    }
 
                },
                error: function() {
                    $('#results').html('<div class="alert alert-danger alert-dismissible fade show" role="alert">'
                        +'<strong>Errore!</strong> Si è verificato un errore durante l\'invio della richiesta.'
                        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                            +'<span aria-hidden="true">&times;</span>'
                        +'</button>'
                    +'</div>');
                }
    
            });

        }

    });

    // send form
    $("#send-form").click(function(e){
        e.preventDefault();  

        var user_id = $("#user_id").val();
        var title = $("#title").val();
        var language = $("#language").val();
        var framework = $("#framework").val();
        var dataset = $("#dataset").val();
        var dataset_datatype = $("#dataset_datatype").val();
        var model = $("#model").val();

        if ( !user_id || !title || !language || !dataset || !dataset_datatype || !model ) { 

            $('#send-form-result').html('<div class="alert alert-warning alert-dismissible fade show" role="alert">'
                    +'<strong>Warning!</strong> Compilare i campi obbligatori.'
                    +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                        +'<span aria-hidden="true">&times;</span>'
                    +'</button>'
                +'</div>');

        }
        else {
            
            $.ajax({

                type: "POST",
                url: API + 'jobs',
                dataType: "json",
                data: {
                    user_id: user_id,
                    title: title,
                    language: language,
                    framework: framework,
                    dataset: dataset,
                    dataset_datatype: dataset_datatype,
                    model: model
                },
                success: function(data) {
                    $('#send-form-result').html('<div class="alert alert-success alert-dismissible fade show" role="alert">'
                        +'<strong>Richiesta ricevuta!</strong> '
                        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                            +'<span aria-hidden="true">&times;</span>'
                        +'</button>'
                    +'</div>');
                },
                error: function() {
                    $('#send-form-result').html('<div class="alert alert-danger alert-dismissible fade show" role="alert">'
                        +'<strong>Errore!</strong> Si è verificato un errore durante l\'invio della richiesta.'
                        +'<button type="button" class="close" data-dismiss="alert" aria-label="Close">'
                            +'<span aria-hidden="true">&times;</span>'
                        +'</button>'
                    +'</div>');
                }
    
            });

        }
        
    });


});
