window.addEventListener('load', function () {
    const formulario = document.querySelector('#add_new_odontologo');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("Sending post")
        let formData = {
            nombre : $("#nombre").val(),
            apellido :  $("#apellido").val(),
            matricula: $("#matricula").val(),
        }
        const url = '/odontologos';
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        }
        fetch(url,settings).then(response => response.json()).then(data => {

            let odontologo = response
            console.log(response)
            let successAlert = '<div class="alert alert-success alert-dismissible">' +
                '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                '<strong></strong> odontologo agregado </div>'
            $("#response").append(successAlert);
            $("#response").css({"display": "block"});

            resetUploadForm();

        }).catch(error =>{
            let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                '<strong> Error intente nuevamente</strong> </div>'
            $("#response").append(errorAlert);
            $("#response").css({"display": "block"});

            resetUploadForm();
        })
    });

    function resetUploadForm(){
        $("#nombre").val("");
        $("#apellido").val("");
        $("#matricula").val("");
    }

    (function(){
        let pathname = window.location.pathname;
        if(pathname === "/"){
            $(".nav .nav-item a:first").addClass("active");
        } else if (pathname == "/odontologos.html") {
            $(".nav .nav-item a:last").addClass("active");
        }
    })();
});