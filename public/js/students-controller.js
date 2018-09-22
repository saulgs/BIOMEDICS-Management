$(document).ready( function(){
    console.log("Main Estudiantes");
    //Ejemplo para agregar la propiedad css display con el valor de none
    //Al cargarse el documento jquery la propiedad a traves
    //de la funcion .css()
    //lo que permite que el elemento selleciondo no se muestre
    //al cargar la pagina
   // $("#btn-cerrar-sesion").css("display","none");
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

    $("#miTabla2").DataTable({
        dom: 'lBfrtip',
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

    $("#miTabla3").DataTable({
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

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            responsiveAnimationDuration: 3,
            maintainAspectRatio: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    var ctx2 = document.getElementById("myChart2").getContext('2d');
    var myPieChart = new Chart(ctx2,{
        type: 'pie',
        data:  {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)' 
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1,
                hoverBackgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                hoverBorderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                hoverBorderWidth: 2
            }],
            labels: [
                'Red',
                'Yellow',
                'Blue'
            ]
        },
        options: {
            responsive: true,
            responsiveAnimationDuration: 3,
            maintainAspectRatio: true,
            cutoutPercentage: 0,
            rotation: -0.5*Math.PI,
            circumference: 2*Math.PI,
            animateRotate: true,
            animateScale: false
        }
    });
});

$("#btn-matricula").click(function(){
    $("#principal").fadeOut(200,function(){
        $("#matricula").fadeIn(200);
    });
    $("#btn-matricula").fadeOut(200,function(){
        $("#btn-volver").fadeIn(200);
    });
});

$("#btn-volver").click(function(){
    $("#matricula").fadeOut(200,function(){
        $("#principal").fadeIn(200);
    });
    $("#btn-volver").fadeOut(200,function(){
        $("#btn-matricula").fadeIn(200);
    });
});