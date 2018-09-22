function sendMail() {
    var link = "mailto:sgs319@hotmail.com"
             + "?cc=sags320@gmail.com"
             + "&subject=" + escape("This is my subject")
             + "&body=" + escape(document.getElementById('myText').value);

    window.location.href = link;
}