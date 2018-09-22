var express = require('express');
var path = require('path');
var app = express();

/*var main = require('./routes/main-unah');
var students = require('./routes/students');
var teachers = require('./routes/teachers');
var webmaster = require('./routes/webmaster');
*/
/*
 * En los imports esta var students = require('./routes/students')
 * Esto lo que nos permite es segmentar la funcionalidad dependiendo de las rutas
 * asi, no tendremos 188930 posts, otros 213782183 gets para cada pagina que
 * elaboremos en este archivo.
 */

app.use('/', express.static(__dirname + "/public/"));

/*
 * Lo que hace app.use('/registry/students', students) es unir una
 * URL parcial : '/registry/students' con cualquier URL que se encuentre en
 * la variable students que como definimos al inicio, hace referencia a
 * demas rutas en un archivo js.
 * EJEMPLO:
 * En students tenemos:
 *   router.post("/holamundo", urlEncodeParser, function(request, response) {
 *   console.log('Hola Mundo!');
 *   }
 * Como vemos esta funcion post es llamada cuando la asignamos a la URL '/holamundo' pero,
 * como la utilizamos para unirla a '/registry/students', en realidad el
 * post lo recibe la URL '/registry/students/holamundo'
 */
/*
app.use('/main', main);
app.use('/students', students);
app.use('/teachers', teachers);
app.use('/webmaster', webmaster);
*/

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000.');
});