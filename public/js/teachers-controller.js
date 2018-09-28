$(document).ready(function(){
    //console.log("Main Jefes");
    lineGraph();
    
});



/*$("#btn-toggle").click(function(){
    $("#sidebr").toggle(function() {
        $('#sidebr').css('left', '0')
    }, function() {
        $('#sidebr').css('left', '200px')
    });
});*/

function lineGraph(){
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [{
            data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#007bff',
            borderWidth: 4,
            pointBackgroundColor: '#007bff'
            },{
            data: [12034, 24902, 23489, 24003, 18483, 21345, 15339],
            lineTension: 0,
            backgroundColor: 'transparent',
            borderColor: '#f90f00',
            borderWidth: 4,
            pointBackgroundColor: '#f90f00'
            }]
        },
        options: {
            scales: {
            yAxes: [{
                ticks: {
                beginAtZero: false
                }
            }]
            },
            legend: {
            display: false,
            }
        }
    });
}

$("#btn-solicitud-acceso").click(function(){
    $("main").fadeOut(200,function(){
        $("#PageSolicitud").fadeIn(200);
    });
});

$("#btn-cambio-pass").click(function(){
    $("main").fadeOut(200,function(){
        $("#PageCambioPass").fadeIn(200);
    });
});

$("#btn-ingresar-equipo").click(function(){
    $("main").fadeOut(200,function(){
        $("#Ingresar-equipo").fadeIn(200);
    });
});

$("#btn-historial-equipo").click(function(){
    $("main").fadeOut(200,function(){
        $("#Historial-equipo").fadeIn(200);
    });
});

$("#btn-principal").click(function(){
    $("main").fadeOut(200,function(){
        $("#PagePrincipal").fadeIn(200);
    });
});



var data = [
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Garrett Winters",
        "position":   "Director",
        "salary":     "$5,300",
        "start_date": "2011/07/25",
        "office":     "Edinburgh",
        "extn":       "8422"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    },
    {
        "name":       "Tiger Nixon",
        "position":   "System Architect",
        "salary":     "$3,120",
        "start_date": "2011/04/25",
        "office":     "Edinburgh",
        "extn":       "5421"
    }
];

$("#miTabla1").DataTable({
    dom: 'lBfrtip',
    buttons: [
        'copyHtml5',
        'csvHtml5',
        'pdfHtml5',
        'print'
    ],
    data: data,
    columns: [
        { data: 'name' },
        { data: 'position' },
        { data: 'salary' },
        { data: 'start_date' },
        { data: 'office' },
        { data: 'extn' }
    ],
   // "scrollX": true,
    "scrollY": '250px',
    "scrollCollapse": true
});

var fieldTool = 0;
$("#btn-generar-equipo").click(function(){
    $.ajax({
		url:"/techs/bosses/obtener-datos-esp",
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
                                <input type="text" id="txt-nombre-${fieldTool}" name="nombre" class="form-control" required>
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
                              <input type="text" id="txt-modelo-${fieldTool}" class="form-control" name="modelo" required>
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
                              <input type="text" id="txt-serie-${fieldTool}" class="form-control" name="serie" required>
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
                              <input type="text" id="txt-marca-${fieldTool}" class="form-control" name="marca" required>
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
                              <input type="text" id="txt-ubicacion-${fieldTool}" class="form-control" name="ubicacion" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Voltaje de trabajo AC</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-ac-${fieldTool}" class="form-control" name="ac" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Tipo de adquisición</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-ta-${fieldTool}" class="form-control" name="tad" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Voltaje de trabajo DC</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-dc-${fieldTool}" class="form-control" name="dc" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Fabricante</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-fabricante-${fieldTool}" class="form-control" name="fab" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Potencia</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-potencia-${fieldTool}" class="form-control" name="pt" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Distribuidor</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-dis-${fieldTool}" class="form-control" name="dist" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Corriente máxima</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-cm-${fieldTool}" class="form-control" name="cm" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Manual</label>
                          <div class="col-sm-3">
                             Selecciona un archivo: <input type="file" id="fl-manual-${fieldTool}">
                          </div>
                          <label class="col-sm-2 col-form-label">Frecuencia eléctrica</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-freq-${fieldTool}" class="form-control" name="freq" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Código de hospital</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-ch-${fieldTool}" class="form-control" name="ch" required>
                          </div>
                          <label class="col-sm-2 col-form-label">Modo de funcionamiento</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-mf-${fieldTool}" class="form-control" name="mf" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-sm-2 col-form-label">Parámetro de medición</label>
                          <div class="col-sm-3">
                              <input type="text" id="txt-pm-${fieldTool}" class="form-control" name="pm" required>
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
        var id = "#ceq-" + x;
        var parametros = $(id).serialize();

        $.ajax({
            url:"/techs/bosses/ingresar-equipo",
            data:parametros,
            method:"POST",
            dataType:"json",
            success: function(respuesta){
                //console.log(respuesta);
                $(id).html(`<h2>Equipo guardado con éxito</h2>`);
                $(id).delay(3000).fadeOut(200);
            },
            error: function (e) {
                alert("Ocurrió el siguiente error:"+JSON.stringify(e));
            }
        });

        
        //console.log(vals);
        
        return false;
    });

}   
