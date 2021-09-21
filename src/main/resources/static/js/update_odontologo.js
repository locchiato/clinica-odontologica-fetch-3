window.addEventListener('load', function () {
    const formulario = document.querySelector('#update_odontologo_form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        try {
            let odontologoId = $("#odontologo_id").val();
            const url= "/odontologos";
        let formData = {
            id: $("#odontologo_id").val(),
            nombre : $("#nombre").val(),
            apellido :  $("#apellido").val(),
            matricula: $("#matricula").val(),
        }
            const settings = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            }
            fetch(url,settings)
                .then(response => response.json())
                .then(data => {
                    let odontologo = data;

                    let successAlert = '<div class="alert alert-success alert-dismissible">' +
                        '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                        '<strong> odontologo actualizado </strong></div>'


                    $("#tr_" + odontologoId + " td.td_first_name").text(odontologo.nombre.toUpperCase());
                    $("#tr_" + odontologoId + " td.td_last_name").text(odontologo.apellido.toUpperCase());
                    $("#tr_" + odontologoId + " td.td_matricula").text(odontologo.matricula);

                    $("#response").empty();
                    $("#response").append(successAlert);
                    $("#response").css({"display": "block"});
                }).catch(error =>{
                let errorAlert = '<div class="alert alert-danger alert-dismissible">' +
                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong> Error </strong></div>';

                $("#response").empty();
                $("#response").append(errorAlert);
                $("#response").css({"display": "block"});
            })

        } catch(error){
            console.log(error);
            alert(error);
        }
    });
    
});
function find(id) {
    const url = '/odontologos'+"/"+id;
    const settings = {
        method: 'GET'
    }

    fetch(url,settings)
        .then(response => response.json())
        .then(data => {
            let odontologo = data;
            $("#odontologo_id").val(odontologo.id);
            $("#nombre").val(odontologo.nombre);
            $("#apellido").val(odontologo.apellido);
            $("#matricula").val(odontologo.matricula);
            $("#div_odontologo_updating").css({"display": "block"});
        }).catch(error =>{
        console.log(error);
        alert("Error -> " + error);
    })


}