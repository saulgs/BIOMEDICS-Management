$(document).ready(function(){
    console.log("Main Docentes");
    lineGraph();
    var fieldTool = 0;
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
    $("#campo-equipo").append(
    `<form class="col-10 jumbotron my-4">
        <h3>Nuevo Equipo</h3>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-3">
                <input type="text" id="txt-nombre-${fieldTool}" class="form-control">
            </div>
          <label class="col-sm-2 col-form-label">Tipo alimentación</label>
          <div class="col-sm-3">
              <select id="slc-ta-${fieldTool}" class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Modelo</label>
          <div class="col-sm-3">
              <input type="text" id="txt-modelo-${fieldTool}" class="form-control">
          </div>
          <label class="col-sm-2 col-form-label">Relación paciente</label>
          <div class="col-sm-3">
              <select id="slc-rp-${fieldTool}" class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Tipo de manual</label>
          <div class="col-sm-3">
              <select id="slc-tm-${fieldTool}" class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
          <label class="col-sm-2 col-form-label">Función máquina</label>
          <div class="col-sm-3">
              <select id="slc-fm-${fieldTool}" class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Serie</label>
          <div class="col-sm-3">
              <input type="text" id="txt-serie-${fieldTool}" class="form-control">
          </div>
          <label class="col-sm-2 col-form-label">Uso específico</label>
          <div class="col-sm-3">
              <select id="slc-ue-${fieldTool}" class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Marca</label>
          <div class="col-sm-3">
              <input type="text" id="txt-marca-${fieldTool}" class="form-control">
          </div>
          <label class="col-sm-2 col-form-label">Movimiento de equipo</label>
          <div class="col-sm-3">
              <select id="slc-me-${fieldTool}" class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Ubicación</label>
          <div class="col-sm-3">
              <input type="text" id="txt-ubicacion-${fieldTool}" class="form-control">
          </div>
          <label class="col-sm-2 col-form-label">Voltaje de trabajo AC</label>
          <div class="col-sm-3">
              <input type="text" id="txt-ac-${fieldTool}" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Tipo de adquisición</label>
          <div class="col-sm-3">
              <input type="text" id="txt-ta-${fieldTool}" class="form-control">
          </div>
          <label class="col-sm-2 col-form-label">Voltaje de trabajo DC</label>
          <div class="col-sm-3">
              <input type="text" id="txt-dc-${fieldTool}" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Fabricante</label>
          <div class="col-sm-3">
              <input type="text" id="txt-fabricante-${fieldTool}" class="form-control">
          </div>
          <label class="col-sm-2 col-form-label">Potencia</label>
          <div class="col-sm-3">
              <input type="text" id="txt-potencia-${fieldTool}" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Distribuidor</label>
          <div class="col-sm-3">
              <input type="text" id="txt-dis-${fieldTool}" class="form-control">
          </div>
          <label class="col-sm-2 col-form-label">Corriente máxima</label>
          <div class="col-sm-3">
              <input type="text" id="txt-cm-${fieldTool}" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Manual</label>
          <div class="col-sm-3">
             Selecciona un archivo: <input type="file" id="fl-manual-${fieldTool}">
          </div>
          <label class="col-sm-2 col-form-label">Frecuencia eléctrica</label>
          <div class="col-sm-3">
              <input type="text" id="txt-freq-${fieldTool}" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Modo de funcionamiento</label>
          <div class="col-sm-3">
              <input type="text" id="txt-mf-${fieldTool}" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Parámetro de medición</label>
          <div class="col-sm-3">
              <input type="text" id="txt-pm-${fieldTool}" class="form-control">
          </div>
        </div>
        <button type="button" class="btn btn-success" onclick="guardarEquipo(${fieldTool})">Guardar equipo</button>
      </form>`
    );
    fieldTool++;
});

function guardarEquipo(x){
    console.log(x);
}
