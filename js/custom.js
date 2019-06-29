const API = "http://localhost:8080/brainjobs-gateway/api/v1/users/";

$(document).ready(function() {

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
                dataset_type: $("#dataset_type").val(),
                model: $("#model").val()
            },
            success: function(data) {
                $('#send-form-result').html('<div class="alert alert-success alert-dismissible fade show" role="alert">'
                    +'<strong>Richiesta ricevuta!</strong> '+data.msg
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
