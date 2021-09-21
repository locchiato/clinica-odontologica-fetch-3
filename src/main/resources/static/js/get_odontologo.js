window.addEventListener('load', function () {
    (function(){
        const url = '/odontologos';
        const settings = {
            method: 'GET'
        }
        fetch(url,settings)
            .then(response => response.json())
            .then(data => {
                $.each(data, (i, odontologo) => {


                    let get_More_Info_Btn = '<button' +
                        ' id=' + '\"' + 'btn_id_' + odontologo.id + '\"' +
                        ' type="button" onclick="find('+odontologo.id+')" class="btn btn-info btn_id">' +
                        odontologo.id +
                        '</button>';

                    let tr_id = 'tr_' + odontologo.id;
                    let odontologoRow = '<tr id=\"' + tr_id + "\"" + '>' +
                        '<td>' + get_More_Info_Btn + '</td>' +
                        '<td class=\"td_first_name\">' + odontologo.nombre.toUpperCase() + '</td>' +
                        '<td class=\"td_last_name\">' + odontologo.apellido + '</td>' +
                        '<td class=\"td_matricula\">' + odontologo.matricula + '</td>' +
                        '</tr>';
                    $('#odontologoTable tbody').append(odontologoRow);
                });
            }).catch(error =>{
            alert("ERROR: ", error);
            console.log("ERROR: ", error);
        })

    })();        
    
    (function(){
        let pathname = window.location.pathname;
        if (pathname == "/odontologos.html") {
            $(".nav .nav-item a:last").addClass("active");
        }
    })();
});