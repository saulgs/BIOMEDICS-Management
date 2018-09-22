$(document).ready(function(){
    console.log("Main Docentes");
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

$("#btn-clase1").click(function(){
    $("main").fadeOut(200,function(){
        $("#PageClase1").fadeIn(200);
    });
});

$("#btn-principal").click(function(){
    $("main").fadeOut(200,function(){
        $("#PagePrincipal").fadeIn(200);
    });
});