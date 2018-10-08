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
        if($("#txt-identidad").hasClass("valido") && $("#txt-idemp").hasClass("valido")){
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
                        $("#id-aviso").html(``);
                        $("#idemp-aviso").html(``);
                        $("#txt-identidad").removeClass("valido").addClass("invalido");
                        $("#txt-idemp").removeClass("valido").addClass("invalido");
                        alert("Solicitud enviada con éxito");
                        $('#md-solicitud').delay(3000).modal('hide');
                    }else if (respuesta.responseJSON.affectedRows == 0) {
                        alert("Ocurrió un error: su solicitud no se ingresó");
                    }
                }
            });
        } else {
            alert("Revise los datos ingresados");
        }
        return false;
    });
}

function login(){
    $(document).off('submit');

    $(document).one('submit', function(){
        var id = "#frm-login";
        var parametros = $(id).serialize();
        //console.log(parametros);

        $.ajax({
            url:"/auth/login",
            data: parametros,
            method:"POST",
            dataType:"json",
            success: function(respuesta){
                //console.log(respuesta);
                if(respuesta.status == 1){
                    $(location).attr('href', respuesta.url);
                } else if(respuesta.status == 2) {
                    $(id).find("input[type=text], input[type=password]").val("");
                    alert(respuesta.mensaje);
                } else {
                    $(id).find("input[type=text], input[type=password]").val("");
                    alert("Credenciales inválidas");
                }
            },
            error: function (e) {
                alert("Ocurrió el siguiente error: "+JSON.stringify(e));
            }
        });

        return false;
    });
}

function cmprID(value){
    var parametros = "id=" + value;

    $.ajax({
        url:"/access/comprobar-id",
        data: parametros,
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            //console.log(respuesta);
            if(respuesta.length == 0){
                $("#txt-identidad").removeClass("invalido").addClass("valido");
                $("#id-aviso").html(`<small class="form-text text-muted">ID válido.</small>`);
            } else {
                $("#txt-identidad").removeClass("valido").addClass("invalido");
                $("#txt-identidad").val("");
                $("#id-aviso").html(`<small class="form-text text-muted">ID existe, por favor ingrese uno diferente.</small>`);
            }
        },
        error: function (e) {
            alert("Ocurrió el siguiente error: "+JSON.stringify(e));
        }
    });
}

function cmprEMP(value){
    var parametros = "id=" + value;

    $.ajax({
        url:"/access/comprobar-empleado",
        data: parametros,
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            //console.log(respuesta);
            if(respuesta.length == 0){
                $("#txt-idemp").removeClass("invalido").addClass("valido");
                $("#idemp-aviso").html(`<small class="form-text text-muted">ID de empleado válido.</small>`);
            } else {
                $("#txt-idemp").removeClass("valido").addClass("invalido");
                $("#txt-idemp").val("");
                $("#idemp-aviso").html(`<small class="form-text text-muted">ID de empleado existe, por favor ingrese uno diferente.</small>`);
            }
        },
        error: function (e) {
            alert("Ocurrió el siguiente error: "+JSON.stringify(e));
        }
    });
}