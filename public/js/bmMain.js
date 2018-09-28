$(document).ready(function(){
    //console.log("Main Login");
    nacionalidades();
    cargos();
    
    
});

function cargos(){
    $.ajax({
        url:"/access/cargos",
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            //console.log(respuesta);
            if(respuesta.length > 0){
				for(let i = 0; i < respuesta.length; i++){
					$("#slc-cargo").append(
						`<option value="${respuesta[i].codigo}">${respuesta[i].cargo} - ${respuesta[i].departamento}</option>`
					);
				}
			}else if(respuesta.length == 0){
				alert("No hay cargos o departamentos ingresados en la base de datos");
			}
        },
        error: function (e) {
            alert("Ocurrió el siguiente error: "+JSON.stringify(e));
        }
    });
}

function nacionalidades(){
    $.ajax({
        url:"/access/nacionalidad",
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            //console.log(respuesta);
            if(respuesta.length > 0){
				for(let i = 0; i < respuesta.length; i++){
					$("#slc-nacionalidad").append(
						`<option value="${respuesta[i].codigo}">${respuesta[i].pais}</option>`
					);
				}
			}else if(respuesta.length == 0){
				alert("No hay paises en la base de datos");
			}
        },
        error: function (e) {
            alert("Ocurrió el siguiente error: "+JSON.stringify(e));
        }
    });
}

function solicitarAcceso(){
    $(document).off('submit');

    $(document).one('submit', function(){
        var id = "#frm-sa";
        var parametros = $(id).serialize();
        //console.log(parametros);

        $.ajax({
            url:"/access/solicitar",
            data:parametros,
            method:"POST",
            dataType:"json",
            complete: function(respuesta){
                //console.log(respuesta);
                if(respuesta.responseJSON.affectedRows == 1){
                    $(id).find("input[type=text], select, input[type=date], input[type=password], input[type=radio]").val("").prop('checked', false);
                    alert("Solicitud enviada con éxito");
                    $('#md-solicitud').delay(3000).modal('hide');
                }else if (respuesta.responseJSON.affectedRows == 0) {
                    alert("Ocurrió un error: su solicitud no se ingresó");
                }
            }
        });

        return false;
    });
}


function sendMail() {
    var link = "mailto:sgs319@hotmail.com"
             + "?cc=sags320@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value);

    window.location.href = link;
}
