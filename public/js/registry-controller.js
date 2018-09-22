$(document).ready(function(){
    console.log("Main Registro UNAH");
});

$('#btn-login-teacher').click(function(){
    $.ajax({
        url:"/teachers/mainTeachers",
		method:"POST",
		success: function(response){
            location.href = response;
		},
		error: function (e) {
			alert("Ocurrió el siguiente error:"+JSON.stringify(e));
		}
    });
});

$('#btn-login-student').click(function(){
    $.ajax({
        url:"/students/mainStudents",
		method:"POST",
		success: function(response){
            location.href = response;
		},
		error: function (e) {
			alert("Ocurrió el siguiente error:"+JSON.stringify(e));
		}
    });
});

$('#btn-webmaster').click(function(){
    $.ajax({
        url:"/webmaster/mainMaster",
		method:"POST",
		success: function(response){
            location.href = response;
		},
		error: function (e) {
			alert("Ocurrió el siguiente error:"+JSON.stringify(e));
		}
    });
});