$(document).ready(function(){
   $('.parallax').parallax();
   $(".button-collapse").sideNav();
   $('.dropdown-button').dropdown();
   
});

$("#btn-registry").click(function(){
  $.ajax({
    url:"/main/toRegistry",
    method:"GET",
    success: function(response){
            location.href = response;
    },
    error: function (e) {
      alert("Ocurrió el siguiente error:"+JSON.stringify(e));
    }
  });
});

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function myMap() {
var mapProp= {center:new google.maps.LatLng(14.086232, -87.165973), zoom:15,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
