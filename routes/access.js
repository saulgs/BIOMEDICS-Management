var express = require('express');
var bodyParser = require("body-parser");
var sha512 = require('sha512');

/*
 * Importamos la funcion realizarQuery para facilitar la insercion de informacion
 * en la base de datos
 */
var realizarQrCB = require('../modulos/conexion').realizarQrCB;
var realizarQuery = require('../modulos/conexion').realizarQuery;
/*
 * Creamos una funcion router que exportaremos luego que nos permitira importarla
 * en otros archivos.
 */
var router = express.Router();
var urlEncodeParser = bodyParser.urlencoded({
  extended: false
});

router.use(bodyParser.json());

router.post('/solicitar', urlEncodeParser, function(req, res){
  var sql = `INSERT INTO tbl_persona(id_persona, 
                                    nombre, 
                                    apellido, 
                                    edad, 
                                    sexo, 
                                    fecha_nacimiento, 
                                    direccion, 
                                    telefono, 
                                    codigo_pais_fk) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  var values = [req.body.id,
                req.body.nombre,
                req.body.apellido,
                req.body.edad,
                req.body.sexo,
                req.body.fechaN,
                req.body.direccion,
                req.body.telefono,
                req.body.nacionalidad];

  var hash = sha512(req.body.pass);
  var password = hash.toString('hex');
  var sql2 = `INSERT INTO tbl_empleados(id_empleado,  
                                        codigo_cargo_fk, 
                                        contrasena,
                                        codigo_persona_fk) 
              VALUES (?, ?, ?, ?)`;
  var values2 = [req.body.idemp, 
                req.body.cargo, 
                password];

  var sql3 = `INSERT INTO tbl_solicitud_acceso(estatus_acceso, codigo_empleado_fk) VALUES (?, ?)`;
  //El "estatus = 0", el valor de cero representa que el usuario no tiene acceso a la plataforma 
  var estatus = 0;
  var values3 = [estatus];

 /* var vs = `id=12&
            nombre=asd&
            apellido=asd&
            edad=10&
            sexo=masculino&
            fechaN=2018-09-27&
            direccion=qwe&
            telefono=qwe&
            nacionalidad=7&
            idemp=1984&
            cargo=2&
            pass=1984`;
*/
  realizarQrCB(sql, values, sql2, values2, sql3, values3, function(response){
      res.send(response); 
      //console.log("Desde /access/solicitar: "+ JSON.stringify(response)); 
  });
});

router.post('/cargos', urlEncodeParser, function(req, res){
  var sql = `SELECT b.codigo_cargo AS codigo, b.nombre_cargo AS cargo, a.nombre_departamento AS departamento
              FROM tbl_departamento a
              INNER JOIN tbl_cargos b
              ON a.codigo_departamento = b.codigo_departamento_fk`;
  var values = [];

  realizarQuery(sql, values, function(response){
      res.send(response);
  });
});

router.post('/nacionalidad', urlEncodeParser, function(req, res){
  var sql = `SELECT codigo_pais AS codigo, nombre_pais AS pais FROM tbl_nacionalidades`;
  var values = [];

  realizarQuery(sql, values, function(response){
      res.send(response);
  });
});

module.exports = router;