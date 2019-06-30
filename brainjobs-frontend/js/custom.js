const API = "http://localhost:8080/brainjobs-gateway/api/v1/users/";

$(document).ready(function() {

    // get all requests
    $("#get-all-requests").click(function(e){
        e.preventDefault(); 

        var user_id = $("#user_id_search").val();

        $.ajax({

            type: "GET",
            url: API + user_id + '/jobs',
            dataType: "json",
            success: function(data) {

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

                $('#results').html('<div class="alert alert-info" role="alert">'
                    +'<strong>Dati richiesti</strong> <br><br>'+result
                +'</div>');
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

    });

    // get single request
    $("#get-single-request").click(function(e){
        e.preventDefault(); 

        $.ajax({

            type: "GET",
            url: 'http://localhost:8080/brainjobs-gateway/api/v1/jobs/' + $("#job_id").val(),
            dataType: "json",
            success: function(data) {

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

                $('#results').html('<div class="alert alert-info" role="alert">'
                    +'<strong>Dati richiesti</strong> <br><br>'+result
                +'</div>');
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

    });

    // send form
    $("#send-form").click(function(e){
        e.preventDefault();  

        var user_id = $("#user_id").val();

        $.ajax({

            type: "POST",
            url: API + user_id + '/jobs',
            dataType: "json",
            data: {
                user_id: user_id,
                title: $("#title").val(),
                language: $("#language").val(),
                framework: $("#framework").val(),
                dataset: $("#dataset").val(),
                dataset_datatype: $("#dataset_datatype").val(),
                model: $("#model").val()
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

    });


});
