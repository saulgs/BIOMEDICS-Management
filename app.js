var express = require('express');
var path = require('path');
var app = express();

var ingresarEM = require('./routes/ingresar-em');
var access = require('./routes/access');
var solicitud = require('./routes/solicitudes');
var auth = require('./routes/authentication');

/*
 * En los imports esta var ingresarEM = require('./routes/ingresar-em')
 * Esto lo que nos permite es segmentar la funcionalidad dependiendo de las rutas
 * asi, no tendremos 188930 posts, otros 213782183 gets para cada pagina que
 * elaboremos en este archivo.
 */

app.use('/', express.static(__dirname + "/public/"));

/*
 * Lo que hace app.use('/techs/bosses', ingresarEM) es unir una
 * URL parcial : '/techs/bosses' con cualquier URL que se encuentre en
 * la variable students que como definimos al inicio, hace referencia a
 * demas rutas en un archivo js.
 * EJEMPLO:
 * En ingresar-em tenemos:
 *   router.post("/holamundo", urlEncodeParser, function(request, response) {
 *   console.log('Hola Mundo!');
 *   }
 * Como vemos esta funcion post es llamada cuando la asignamos a la URL '/holamundo' pero,
 * como la utilizamos para unirla a '/techs/bosses', en realidad el
 * post lo recibe la URL '/techs/bosses/holamundo'
 */

app.use('/bosses', ingresarEM);
app.use('/access', access);
app.use('/solicitud', solicitud);
app.use('/auth', auth);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000.');
});