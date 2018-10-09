$(document).ready(function(){
    verificarSesion();
    myInfo();
    tblEquipos();
    
});

var fieldTool = 0;

function verificarSesion(){
    $.ajax({
		url:"/auth/getSessionTechs",
		method:"POST",
		dataType:"json",
		success:function(respuesta){
            //console.log(respuesta);
            if(respuesta.status == 0){
                $("body").html(
                    `<div style="margin: 25px 0px 0px 25px">
                        <h2>${respuesta.mensaje}</h2><br>
                        <h3>Redireccionando a pagina principal...</h3><br>
                    </div>`
                );
                destruir();
            }
        },
		error:function(e){
			console.log("Error: " + JSON.stringify(e));
		}
    });
}

function destruir(){
    $.ajax({
		url:"/auth/destroySession",
		method:"POST",
		dataType:"json",
		success:function(respuesta){
            //console.log(respuesta);
            if(respuesta.status == 1){
                setTimeout(function(){ 
                    $(location).attr('href', respuesta.url); 
                }, 3000);
            }
        },
		error:function(e){
			console.log("Error: " + JSON.stringify(e));
		}
    });
}

function myInfo(){
    var id = getCookie('id');
    var data = "id=" + id;

    $.ajax({
        url:"/solicitud/myInfo",
        data: data,
		method:"POST",
		dataType:"json",
		success:function(respuesta){
            //console.log(respuesta);
            if(respuesta.length == 1){
                $("#tbl-info").append(
                `<div class="jumbotron" style="margin-bottom: 0rem;">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                          <label for="stInfo"><h2>Mi Información</h2></label>
                          <table id="stInfo" class="table table-sm">
                            <thead>
                            </thead>
                            <tbody>
                              <tr>
                                <td>ID Empleado:</td>
                                <td>${respuesta[0].id}</td>
                              </tr>
                              <tr>
                                <td>Nombre:</td>
                                <td>${respuesta[0].nombre}</td>
                              </tr>
                              <tr>
                                <td>Departamento:</td>
                                <td>${respuesta[0].departamento}</td>
                              </tr>
                              <tr>
                                <td>Cargo:</td>
                                <td>${respuesta[0].cargo}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>`
                );
            }
        },
		error:function(e){
			console.log("Error: " + JSON.stringify(e));
		}
    });
}


$("#btn-ingresar-equipo").click(function(){
    $("main").fadeOut(200,function(){
        $("#Ingresar-equipo").fadeIn(200);
    });
});

$("#btn-historial-equipo").click(function(){
    $("#btn-mant").prop('disabled', true);
    $("main").fadeOut(200,function(){
        $("#Historial-equipo").fadeIn(200);
    });
    $("#btn-mant").prop('disabled', true);
});

$("#btn-principal").click(function(){
    $("main").fadeOut(200,function(){
        $("#PagePrincipal").fadeIn(200);
    });
});

$("#btn-eoe-equipo").click(function(){
    $("main").fadeOut(200,function(){
        $("#Editar-equipo").fadeIn(200);
    });
});

$("#btn-buscar-equipo").click(function(){
    var data = "id="+ $("#txt-id-equipo").val();
    $("#txt-equipo").val($("#txt-id-equipo").val());
    //console.log($("#txt-equipo").val());
    $("#cmp-historial").html("");
    $("#cmp-historias").html("");
    $("#txt-codigo-equipo").val("");

    var promise = $.ajax({
        url:"/bosses/obtener-equipo",
        data:data,
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            //console.log(respuesta);
            if(respuesta.length > 0){
                $("#txt-codigo-equipo").val(respuesta[0].codigo);
                $("#btn-mant").prop('disabled', false);
                //console.log($("#txt-codigo-equipo").val());
                $("#cmp-historial").append(
                `<div class="jumbotron my-4">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <label for="stInfo"><h2>Información del equipo</h2></label>
                            <table id="stInfo" class="table table-sm">
                                <thead>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Nombre:</td>
                                    <td>${respuesta[0].nombre}</td>
                                </tr>
                                <tr>
                                    <td>Modelo:</td>
                                    <td>${respuesta[0].modelo}</td>
                                </tr>
                                <tr>
                                    <td>Serie:</td>
                                    <td>${respuesta[0].serie}</td>
                                </tr>
                                <tr>
                                    <td>Código hospital:</td>
                                    <td>${respuesta[0].ch}</td>
                                </tr>
                                <tr>
                                    <td>Marca:</td>
                                    <td>${respuesta[0].marca}</td>
                                </tr>
                                <tr>
                                    <td>Ubicacion:</td>
                                    <td>${respuesta[0].ub}</td>
                                </tr>
                                <tr>
                                    <td>Tipo de adquisicion:</td>
                                    <td>${respuesta[0].ta}</td>
                                </tr>
                                <tr>
                                    <td>Fabricante:</td>
                                    <td>${respuesta[0].fab}</td>
                                </tr>
                                <tr>
                                    <td>Distribuidor:</td>
                                    <td>${respuesta[0].dist}</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>`
                );
            } else {
                $("#btn-mant").prop('disabled', true);
                $("#cmp-historial").html(
                    `<h2>No existe el equipo que está buscando</h2>`
                );
                setTimeout(function(){
                    $("#cmp-historial").html("");
                }, 4000);
            }
        },
        error: function (e) {
            alert("Ocurrió el siguiente error:"+JSON.stringify(e));
        }
    });
    promise.then(function(){
        if($("#txt-codigo-equipo").val() != ""){
            var data = "codigo="+$("#txt-codigo-equipo").val();
            var anw;

            $.ajax({
                url:"/bosses/mant-x-eq",
                data:data,
                method:"POST",
                dataType:"json",
                success: function(respuesta){
                    //console.log(respuesta);
                    if(respuesta.length > 0){
                        for(let i=0; i<respuesta.length; i++){
                            if(respuesta[i].id == null){
                                anw = "El usuario que realizó este mantenimiento ya no existe"
                            } else {
                                anw = respuesta[i].id; 
                            }
                            $("#cmp-historias").prepend(
                            `<div class="jumbotron my-4">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <label for="stInfo"><h2>Historia de mantenimiento ${i + 1} del equipo ${$("#txt-id-equipo").val()}</h2></label>
                                        <table id="stInfo" class="table table-sm">
                                            <thead>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>ID Empleado que realizó el mantenimiento:</td>
                                                <td>${anw}</td>
                                            </tr>
                                            <tr>
                                                <td>Tipo de mantenimiento:</td>
                                                <td>${respuesta[i].mant}</td>
                                            </tr>
                                            <tr>
                                                <td>Fecha del mantenimiento:</td>
                                                <td>${respuesta[i].fecha}</td>
                                            </tr>
                                            <tr>
                                                <td>Historia del mantenimiento:</td>
                                                <td>${respuesta[i].des}</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </div>`
                            );
                        }
                    } else {
                        $("#cmp-historias-aviso").html(
                            `<h2>No existe historial de mantenimiento para este equipo</h2>`
                        );
                    }
                },
                error: function (e) {
                    alert("Ocurrió el siguiente error:"+JSON.stringify(e));
                }
            });
        }
    });       
});


$("#btn-mant").click(function(){
    $("#cmp-new-mant").html("");

    $.ajax({
        url:"/bosses/obtener-tmant",
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            //console.log(respuesta);
            if(respuesta.length > 0){
                $("#cmp-new-mant").append(
                `<div class="jumbotron my-4">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <form id="frm-mant">
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Tipo de mantenimiento</label>
                                        <div class="col-sm-4">
                                            <select id="slc-tmant" class="form-control" name="tmant" required>
                                                <option disabled selected value> Seleccione </option>
                                                <option value="${respuesta[0].codigo}">${respuesta[0].tipo}</option>
                                                <option value="${respuesta[1].codigo}">${respuesta[1].tipo}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-2 col-form-label">Historia</label>
                                        <div class="col-sm-10">
                                            <textarea rows="10" cols="50" class="form-control" id="ta-mant" name="mantenimiento" wrap="off" form="frm-mant" placeholder="Ingrese aqui la historia de mantenimiento (máx.: 10,000 caracteres)" maxlength="9900"></textarea>
                                        </div>
                                    </div>
                                    <input type="submit" role="button" class="btn btn-success" onclick="guardarMant()" value="Guardar mantenimiento">
                                    <button type="button" class="btn btn-primary" onclick="cerrarMant()">Cerrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>`
                );
            } else {
                alert("Ingrese de forma manual través de phpMyAdmin los tipos de mantenimiento en la BD, en la tabla tbl_tipo_mantenimiento");
            }
        },
        error: function (e) {
            alert("Ocurrió el siguiente error:"+JSON.stringify(e));
        }
    });
});

function cerrarMant(){
    $("#cmp-new-mant").html("");    
}


function tblEquipos(){
    $.ajax({
        url:"/bosses/obtener-equipos-ingresados",
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            if(respuesta.length > 0){
                $("#miTabla1").DataTable({
                    dom: 'lBfrtip',
                    buttons: [
                        'copyHtml5',
                        'csvHtml5',
                        'pdfHtml5',
                        'print'
                    ],
                    data: respuesta,
                    columns: [
                        { data: 'nombre' },
                        { data: 'modelo' },
                        { data: 'serie' },
                        { data: 'tm' },
                        { data: 'ch' },
                        { data: 'marca' },
                        { data: 'ubicacion' },
                        { data: 'ta' },
                        { data: 'fab' },
                        { data: 'dist' },
                        { data: 'tal' },
                        { data: 'rp' },
                        { data: 'fm' },
                        { data: 'ue' },
                        { data: 'me' },
                        { data: 'ac' },
                        { data: 'dc' },
                        { data: 'pt' },
                        { data: 'cm' },
                        { data: 'freq' },
                        { data: 'mf' },
                        { data: 'pm' }
                    ],
                    //"scrollX": true,
                    "scrollY": '250px',
                    "scrollCollapse": true
                });
            } else {
                $("#miTabla1").html("<h3>No hay equipos ingresados en la base de datos</h3>");
            }
        },
        error: function (e) {
            alert("Ocurrió el siguiente error:"+JSON.stringify(e));
        }
    });
    
}



$("#btn-generar-equipo").click(function(){
    $.ajax({
		url:"/bosses/obtener-datos-esp",
		method:"POST",
		success: function(respuesta){
			//console.log(respuesta);
			if(respuesta.length > 0){
                $("#campo-equipo").append(
                    `<form id="ceq-${fieldTool}" class="col-10 jumbotron my-4">
                        <h3>Nuevo Equipo</h3>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-3">
                                <input type="text" id="txt-nombre-${fieldTool}" name="nombre" class="form-control" maxlength="80" required>
                            </div>
                          <label class="col-sm-2 col-form-label">Tipo alimentación</label>
                          <div class="col-sm-3">
                              <select id="slc-ta-${fieldTool}" class="form-control" name="ta" required>
                                <option disabled selected value> Seleccione </option>
                                <option value="${respuesta[0].codigo}">${respuesta[0].tipo}</option>
                                <option value="${respuesta[1].codigo}">${respuesta[1].tipo}</option>
                                <option value="${respuesta[2].codigo}">${respuesta[2].tipo}</option>
                                <option value="${respuesta[3].codigo}">${respuesta[3].tipo}</option>
                                <option value="${respuesta[4].codigo}">${respuesta[4].tipo}</option>
                              </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Modelo</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-modelo-${fieldTool}" class="form-control" name="modelo" maxlength="40" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Relación paciente</label>
                          <div class="col-sm-3">
                              <select id="slc-rp-${fieldTool}" class="form-control" name="rp" required>
                                <option disabled selected value> Seleccione </option>
                                <option value="${respuesta[5].codigo}">${respuesta[5].tipo}</option>
                                <option value="${respuesta[6].codigo}">${respuesta[6].tipo}</option>
                                <option value="${respuesta[7].codigo}">${respuesta[7].tipo}</option>
                              </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Tipo de manual</label>
                          <div class="col-sm-3">
                              <select id="slc-tm-${fieldTool}" class="form-control" name="tm" required>
                                <option disabled selected value> Seleccione </option>
                                <option value="${respuesta[22].codigo}">${respuesta[22].tipo}</option>
                                <option value="${respuesta[23].codigo}">${respuesta[23].tipo}</option>
                                <option value="${respuesta[24].codigo}">${respuesta[24].tipo}</option>
                              </select>
                          </div>
                          <label class="col-sm-2 col-form-label">Función máquina</label>
                          <div class="col-sm-3">
                              <select id="slc-fm-${fieldTool}" class="form-control" name="fm" required>
                                <option disabled selected value> Seleccione </option>
                                <option value="${respuesta[8].codigo}">${respuesta[8].tipo}</option>
                                <option value="${respuesta[9].codigo}">${respuesta[9].tipo}</option>
                                <option value="${respuesta[10].codigo}">${respuesta[10].tipo}</option>
                                <option value="${respuesta[11].codigo}">${respuesta[11].tipo}</option>
                              </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Serie</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-serie-${fieldTool}" class="form-control" name="serie" maxlength="40" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Uso específico</label>
                          <div class="col-sm-3">
                              <select id="slc-ue-${fieldTool}" class="form-control" name="ue" required>
                                <option disabled selected value> Seleccione </option>
                                <option value="${respuesta[15].codigo}">${respuesta[15].tipo}</option>
                                <option value="${respuesta[16].codigo}">${respuesta[16].tipo}</option>
                                <option value="${respuesta[17].codigo}">${respuesta[17].tipo}</option>
                                <option value="${respuesta[18].codigo}">${respuesta[18].tipo}</option>
                                <option value="${respuesta[19].codigo}">${respuesta[19].tipo}</option>
                                <option value="${respuesta[20].codigo}">${respuesta[20].tipo}</option>
                                <option value="${respuesta[21].codigo}">${respuesta[21].tipo}</option>
                              </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Marca</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-marca-${fieldTool}" class="form-control" name="marca" maxlength="45" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Movimiento de equipo</label>
                          <div class="col-sm-3">
                              <select id="slc-me-${fieldTool}" class="form-control" name="me" required>
                                <option disabled selected value> Seleccione </option>
                                <option value="${respuesta[12].codigo}">${respuesta[12].tipo}</option>
                                <option value="${respuesta[13].codigo}">${respuesta[13].tipo}</option>
                                <option value="${respuesta[14].codigo}">${respuesta[14].tipo}</option>
                              </select>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Ubicación</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-ubicacion-${fieldTool}" class="form-control" name="ubicacion" maxlength="140" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Voltaje de trabajo AC</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-ac-${fieldTool}" class="form-control" name="ac" maxlength="5" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Tipo de adquisición</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-ta-${fieldTool}" class="form-control" name="tad" maxlength="40" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Voltaje de trabajo DC</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-dc-${fieldTool}" class="form-control" name="dc" maxlength="5" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Fabricante</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-fabricante-${fieldTool}" class="form-control" name="fab" maxlength="40" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Potencia</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-potencia-${fieldTool}" class="form-control" name="pt" maxlength="10" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Distribuidor</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-dis-${fieldTool}" class="form-control" name="dist" maxlength="40" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Corriente máxima</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-cm-${fieldTool}" class="form-control" name="cm" maxlength="10" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Manual</label>
                          <div class="col-sm-3">
                             Selecciona un archivo: <input type="file" id="fl-manual-${fieldTool}">
                          </div>
                          <label class="col-sm-2 col-form-label">Frecuencia eléctrica</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-freq-${fieldTool}" class="form-control" name="freq" maxlength="10" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Código de hospital</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-ch-${fieldTool}" class="form-control invalido" name="ch" onkeyup="mayusVal('txt-ch-${fieldTool}')" onchange="cmprCH('txt-ch-${fieldTool}', 'aviso-ch-${fieldTool}', this.value)" maxlength="43" required>
                              <span id="aviso-ch-${fieldTool}"></span>
                          </div>
                          <label class="col-sm-2 col-form-label">Modo de funcionamiento</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-mf-${fieldTool}" class="form-control" name="mf" maxlength="80" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Parámetro de medición</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-pm-${fieldTool}" class="form-control" name="pm" maxlength="80" required>
                          </div>
                        </div>
                        <input type="submit" role="button" class="btn btn-success" onclick="guardarEquipo(${fieldTool})"  value="Guardar equipo">
                      </form>`
                    );
			} else if(respuesta.length == 0){
				alert("Ocurrió un error");
			}
		},
		error: function (e) {
			alert("Ocurrió el siguiente error:"+JSON.stringify(e));
		}
	});
    
    fieldTool++;
});


function guardarEquipo(x){
    $(document).off('submit');

    $(document).one('submit', function() {
        var txt = "#txt-ch-" + x;
        if($(txt).hasClass("valido")){
            var id = "#ceq-" + x;
            var parametros = $(id).serialize();

            $.ajax({
                url:"/bosses/ingresar-equipo",
                data:parametros,
                method:"POST",
                dataType:"json",
                success: function(respuesta){
                    //console.log(respuesta);
                    if(respuesta.affectedRows > 0){
                        $(id).html(`<h2>Equipo guardado con éxito</h2>`);
                        $(id).delay(3000).fadeOut(200);
                    }
                },
                error: function (e) {
                    alert("Ocurrió el siguiente error:"+JSON.stringify(e));
                }
            });
        } else {
            alert("Revise el código de hospital");
        }        
        return false;
    });
}

function guardarMant(){
    $(document).off('submit');

    $(document).one('submit', function() {
        
        var mantenimiento = $("#ta-mant").val();
        if(mantenimiento != ""){
            var id = "#frm-mant";
            var parametros = $(id).serialize();
            var data = "&codigo="+ $("#txt-codigo-equipo").val() +"&"+
                        "codigoId=" + getCookie('codigo');
            parametros += data;
            //console.log(parametros);

            $.ajax({
                url:"/bosses/ingresar-mant",
                data:parametros,
                method:"POST",
                dataType:"json",
                success: function(respuesta){
                    //console.log(respuesta);"
                    if(respuesta.affectedRows == 1){
                        $("#cmp-historias-aviso").html("");
                        $(id).find("select, textarea").val("");
                        ultimoMant();
                        $("#cmp-new-mant").html(`<h2>Se ingreso la historia de mantenimiento correctamente</h2>`);
                        setTimeout(function(){
                            $("#cmp-new-mant").html(""); 
                        }, 3000);
                    } else {
                        alert("ERROR: El equio no se ingresó");
                    }
                },
                error: function (e) {
                    alert("Ocurrió el siguiente error:"+JSON.stringify(e));
                }
            }); 

        } else {
            alert("Llene al campo de historia de mantenimiento o cierre el formulario");
        }
            
        return false;
    });
}

function ultimoMant(){
    if($("#txt-codigo-equipo").val() != ""){
        var data = "codigo="+$("#txt-codigo-equipo").val();

        $.ajax({
            url:"/bosses/ultimo-mant",
            data:data,
            method:"POST",
            dataType:"json",
            success: function(respuesta){
                //console.log(respuesta);
                if(respuesta.length > 0){
                    for(let i=0; i<respuesta.length; i++){
                        $("#cmp-historias").prepend(
                        `<div class="jumbotron my-4">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <label for="stInfo"><h2>Ultima historia de mantenimiento ingresada del equipo ${$("#txt-id-equipo").val()}</h2></label>
                                    <table id="stInfo" class="table table-sm">
                                        <thead>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>ID Empleado que realizó el mantenimiento:</td>
                                            <td>${respuesta[i].id}</td>
                                        </tr>
                                        <tr>
                                            <td>Tipo de mantenimiento:</td>
                                            <td>${respuesta[i].mant}</td>
                                        </tr>
                                        <tr>
                                            <td>Fecha del mantenimiento:</td>
                                            <td>${respuesta[i].fecha}</td>
                                        </tr>
                                        <tr>
                                            <td>Historia del mantenimiento:</td>
                                            <td>${respuesta[i].des}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </div>`
                        );
                    }
                } else {
                    $("#cmp-historias").html(
                        `<h2>No existe historial de mantenimiento para este equipo</h2>`
                    );
                }
            },
            error: function (e) {
                alert("Ocurrió el siguiente error:"+JSON.stringify(e));
            }
        });
    }
}

function logout(){
    $.ajax({
        url:"/auth/logout",
        method:"GET",
        dataType:"json",
        success: function(respuesta){
            $(location).attr('href', respuesta.url);
        },
        error: function (e) {
            alert("Ocurrió el siguiente error:"+JSON.stringify(e));
        }
    });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function vrfExisteEQP(){
    $("#cmp-eoe").html("");
    $("#txt-chequipo").val("");
    $("#txt-codigodt").val("");
    var data = "codigo="+$("#txt-ch-equipo").val();
    //console.log(data);

    if($("#txt-ch-equipo").val() != ""){
    $.ajax({
        url:"/bosses/existe-equipo",
        data: data,
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            if(respuesta.length > 0){
                $("#txt-ch-equipo").val("");
                $("#txt-chequipo").val(respuesta[0].cem);
                $("#txt-codigodt").val(respuesta[0].cdt);
                obtenerEOE(data);
            } else {
                $("#cmp-eoe").html("<h3>No existe el equipo que esta buscando</h3>");
                setTimeout(function(){
                    $("#cmp-eoe").html(""); 
                }, 4000);
            }
        },
        error: function (e) {
            alert("Ocurrió el siguiente error:"+JSON.stringify(e));
        }
    });
    } else {
        alert("Ingrese un codigo de equipo");
    }
}

function obtenerEOE(data){
var promise = $.ajax({
                url:"/bosses/obtener-datos-esp",
                method:"POST",
                success: function(respuesta){
                    //console.log(respuesta);
                    if(respuesta.length > 0){
                        $("#cmp-eoe").append(
                            `<form id="frm-eoe" class="col-10 jumbotron my-4">
                                <h3>Nuevo Equipo</h3>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">Nombre</label>
                                    <div class="col-sm-3">
                                        <input type="text" id="txt-nombre-eoe" name="nombre" class="form-control" maxlength="80" required>
                                    </div>
                                <label class="col-sm-2 col-form-label">Tipo alimentación</label>
                                <div class="col-sm-3">
                                    <select id="slc-ta-eoe" class="form-control" name="ta" required>
                                        <option disabled selected value> Seleccione </option>
                                        <option value="${respuesta[0].codigo}">${respuesta[0].tipo}</option>
                                        <option value="${respuesta[1].codigo}">${respuesta[1].tipo}</option>
                                        <option value="${respuesta[2].codigo}">${respuesta[2].tipo}</option>
                                        <option value="${respuesta[3].codigo}">${respuesta[3].tipo}</option>
                                        <option value="${respuesta[4].codigo}">${respuesta[4].tipo}</option>
                                    </select>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Modelo</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-modelo-eoe" class="form-control" name="modelo" maxlength="40" required>
                                </div>
                                <label class="col-sm-2 col-form-label">Relación paciente</label>
                                <div class="col-sm-3">
                                    <select id="slc-rp-eoe" class="form-control" name="rp" required>
                                        <option disabled selected value> Seleccione </option>
                                        <option value="${respuesta[5].codigo}">${respuesta[5].tipo}</option>
                                        <option value="${respuesta[6].codigo}">${respuesta[6].tipo}</option>
                                        <option value="${respuesta[7].codigo}">${respuesta[7].tipo}</option>
                                    </select>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Tipo de manual</label>
                                <div class="col-sm-3">
                                    <select id="slc-tm-eoe" class="form-control" name="tm" required>
                                        <option disabled selected value> Seleccione </option>
                                        <option value="${respuesta[22].codigo}">${respuesta[22].tipo}</option>
                                        <option value="${respuesta[23].codigo}">${respuesta[23].tipo}</option>
                                        <option value="${respuesta[24].codigo}">${respuesta[24].tipo}</option>
                                    </select>
                                </div>
                                <label class="col-sm-2 col-form-label">Función máquina</label>
                                <div class="col-sm-3">
                                    <select id="slc-fm-eoe" class="form-control" name="fm" required>
                                        <option disabled selected value> Seleccione </option>
                                        <option value="${respuesta[8].codigo}">${respuesta[8].tipo}</option>
                                        <option value="${respuesta[9].codigo}">${respuesta[9].tipo}</option>
                                        <option value="${respuesta[10].codigo}">${respuesta[10].tipo}</option>
                                        <option value="${respuesta[11].codigo}">${respuesta[11].tipo}</option>
                                    </select>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Serie</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-serie-eoe" class="form-control" name="serie" maxlength="40" required>
                                </div>
                                <label class="col-sm-2 col-form-label">Uso específico</label>
                                <div class="col-sm-3">
                                    <select id="slc-ue-eoe" class="form-control" name="ue" required>
                                        <option disabled selected value> Seleccione </option>
                                        <option value="${respuesta[15].codigo}">${respuesta[15].tipo}</option>
                                        <option value="${respuesta[16].codigo}">${respuesta[16].tipo}</option>
                                        <option value="${respuesta[17].codigo}">${respuesta[17].tipo}</option>
                                        <option value="${respuesta[18].codigo}">${respuesta[18].tipo}</option>
                                        <option value="${respuesta[19].codigo}">${respuesta[19].tipo}</option>
                                        <option value="${respuesta[20].codigo}">${respuesta[20].tipo}</option>
                                        <option value="${respuesta[21].codigo}">${respuesta[21].tipo}</option>
                                    </select>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Marca</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-marca-eoe" class="form-control" name="marca" maxlength="45" required>
                                </div>
                                <label class="col-sm-2 col-form-label">Movimiento de equipo</label>
                                <div class="col-sm-3">
                                    <select id="slc-me-eoe" class="form-control" name="me" required>
                                        <option disabled selected value> Seleccione </option>
                                        <option value="${respuesta[12].codigo}">${respuesta[12].tipo}</option>
                                        <option value="${respuesta[13].codigo}">${respuesta[13].tipo}</option>
                                        <option value="${respuesta[14].codigo}">${respuesta[14].tipo}</option>
                                    </select>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Ubicación</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-ubicacion-eoe" class="form-control" name="ubicacion" maxlength="140" required>
                                </div>
                                <label class="col-sm-2 col-form-label">Voltaje de trabajo AC</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-ac-eoe" class="form-control" name="ac" maxlength="5" required>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Tipo de adquisición</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-ta-eoe" class="form-control" name="tad" maxlength="40" required>
                                </div>
                                <label class="col-sm-2 col-form-label">Voltaje de trabajo DC</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-dc-eoe" class="form-control" name="dc" maxlength="5" required>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Fabricante</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-fabricante-eoe" class="form-control" name="fab" maxlength="40" required>
                                </div>
                                <label class="col-sm-2 col-form-label">Potencia</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-potencia-eoe" class="form-control" name="pt" maxlength="10" required>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Distribuidor</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-dis-eoe" class="form-control" name="dist" maxlength="40" required>
                                </div>
                                <label class="col-sm-2 col-form-label">Corriente máxima</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-cm-eoe" class="form-control" name="cm" maxlength="10" required>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Manual</label>
                                <div class="col-sm-3">
                                    Selecciona un archivo: <input type="file" id="fl-manual-eoe">
                                </div>
                                <label class="col-sm-2 col-form-label">Frecuencia eléctrica</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-freq-eoe" class="form-control" name="freq" maxlength="10" required>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Código de hospital</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-ch-eoe" class="form-control" name="ch" onkeyup="mayusVal('txt-ch-eoe')" maxlength="43" required>
                                </div>
                                <label class="col-sm-2 col-form-label">Modo de funcionamiento</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-mf-eoe" class="form-control" name="mf" maxlength="80" required>
                                </div>
                                </div>
                                <div class="form-group row">
                                <label class="col-sm-2 col-form-label">Parámetro de medición</label>
                                <div class="col-sm-3">
                                    <input type="text" id="txt-pm-eoe" class="form-control" name="pm" maxlength="80" required>
                                </div>
                                </div>
                                <input type="submit" role="button" class="btn btn-success" onclick="actualizarEquipo()"  value="Actualizar equipo">
                                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modal-advertencia">Eliminar equipo</button>
                                <button type="button" class="btn btn-primary" onclick="cerrarEquipo()">Cerrar</button>
                            </form>`
                            );
                    } else if(respuesta.length == 0){
                        alert("Ocurrió un error");
                    }
                },
                error: function (e) {
                    alert("Ocurrió el siguiente error:"+JSON.stringify(e));
                }
            });
promise.then(function(){
    
    $.ajax({
        url:"/bosses/obtener-equipo-edit",
        data: data,
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            $("#txt-nombre-eoe").val(respuesta[0].nombre);
            $("#slc-ta-eoe").val(respuesta[0].cta);
            $("#txt-modelo-eoe").val(respuesta[0].modelo);
            $("#slc-rp-eoe").val(respuesta[0].crp);
            $("#slc-tm-eoe").val(respuesta[0].tm);
            $("#slc-fm-eoe").val(respuesta[0].cfm);
            $("#txt-serie-eoe").val(respuesta[0].serie);
            $("#slc-ue-eoe").val(respuesta[0].cue);
            $("#txt-marca-eoe").val(respuesta[0].marca);
            $("#slc-me-eoe").val(respuesta[0].cme);
            $("#txt-ubicacion-eoe").val(respuesta[0].ubicacion);
            $("#txt-ac-eoe").val(respuesta[0].ac);
            $("#txt-ta-eoe").val(respuesta[0].ta);
            $("#txt-dc-eoe").val(respuesta[0].dc);
            $("#txt-fabricante-eoe").val(respuesta[0].fab);
            $("#txt-potencia-eoe").val(respuesta[0].pt);
            $("#txt-dis-eoe").val(respuesta[0].dist);
            $("#txt-cm-eoe").val(respuesta[0].cm);
            $("#txt-freq-eoe").val(respuesta[0].freq);
            $("#txt-ch-eoe").val(respuesta[0].ch);
            $("#txt-mf-eoe").val(respuesta[0].mf);
            $("#txt-pm-eoe").val(respuesta[0].pm);
        },
        error: function (e) {
            alert("Ocurrió el siguiente error:"+JSON.stringify(e));
        }
    });
});
            
}

function actualizarEquipo(){
    $(document).off('submit');

    $(document).one('submit', function() {
   
        var id = "#frm-eoe";
        var parametros = $(id).serialize();
        var data = "&chequipo="+ $("#txt-chequipo").val() +"&"+
                    "codigodt=" + $("#txt-codigodt").val();
        parametros += data;
        //console.log(parametros);
        
        $.ajax({
            url:"/bosses/actualizar-equipo",
            data:parametros,
            method:"POST",
            dataType:"json",
            success: function(respuesta){
                //console.log(respuesta);"
                if(respuesta.affectedRows == 1){
                    $(id).find("input[type=text], select").val("")
                    $("#cmp-eoe").html(`<h2>Se actualizó el equipo</h2>`);
                    setTimeout(function(){
                        $("#cmp-eoe").html(""); 
                    }, 3000);
                } else {
                    alert("ERROR: El equipo no se actualizó");
                }
            },
            error: function (e) {
                alert("Ocurrió el siguiente error:"+JSON.stringify(e));
            }
        });
        
        return false;
    });
}

function eliminarEquipo(){
    var data = "chequipo="+ $("#txt-chequipo").val() +"&"+
                    "codigodt=" + $("#txt-codigodt").val();
    
    $.ajax({
        url:"/bosses/eliminar-equipo",
        data:data,
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            //console.log(respuesta);
            if(respuesta.affectedRows == 1){
                $("#cmp-eoe").html("<h2>El equipo se ha eliminado con éxito</h2>");
                setTimeout(function(){
                    $('#modal-advertencia').modal('hide');
                    cerrarEquipo();
                }, 200);
                setTimeout(function(){
                    $("#cmp-eoe").html("");
                }, 3000);
                
            } else {
                alert("ERROR: El equipo no se eliminó totalmente");
            }
        },
        error: function (e) {
            alert("Ocurrió el siguiente error:"+JSON.stringify(e));
        }
    });
}

function cerrarEquipo(){
    $("#txt-ch-equipo").val("");
    $("#frm-eoe").fadeOut(200, function(){
        $("#cmp-eoe").html("");
    });
}

function mayusVal(id){
    var field = document.getElementById(id);
    field.value = field.value.toUpperCase();
}

function cmprCH(field, span, value){
    var id = "#" + field;
    var ad = "#" + span;
    var parametros = "ch=" + value;

    $.ajax({
        url:"/bosses/comprobar-ch",
        data: parametros,
        method:"POST",
        dataType:"json",
        success: function(respuesta){
            //console.log(respuesta);
            if(respuesta.length == 0){
                $(id).removeClass("invalido").addClass("valido");
                $(ad).html(`<small class="form-text text-muted">Código válido.</small>`);
            } else {
                $(id).removeClass("valido").addClass("invalido");
                $(id).val("");
                $(ad).html(`<small class="form-text text-muted">Código existe, por favor ingrese uno diferente.</small>`);
            }
        },
        error: function (e) {
            alert("Ocurrió el siguiente error: "+JSON.stringify(e));
        }
    });
}