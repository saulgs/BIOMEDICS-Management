var express = require('express');
var bodyParser = require("body-parser");
var sha512 = require('sha512');
/*
 * Importamos la funcion realizarQuery para facilitar la insercion de informacion
 * en la base de datos
 */
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

router.post("/user-req", urlEncodeParser, function(req, res) {
    var sql = `SELECT a.id_empleado AS id, CONCAT(b.nombre," ",b.apellido) AS nombre, c.nombre_departamento AS departamento, d.nombre_cargo AS cargo, e.estatus_acceso AS acceso
                FROM tbl_empleados a
                INNER JOIN tbl_persona b
                ON a.codigo_persona_fk = b.codigo_persona
                INNER JOIN tbl_cargos d
                ON a.codigo_cargo_fk = d.codigo_cargo
                INNER JOIN  tbl_departamento c
                ON d.codigo_departamento_fk = c.codigo_departamento
                INNER JOIN tbl_solicitud_acceso e
                ON a.codigo_empleado = e.codigo_empleado_fk`;

    var values = [];

    realizarQuery(sql, values, function(response){
        
        for(let i=0; i < response.length; i++){
            if(response[i].acceso == 1){
                response[i].obs = "SI";
            }else if(response[i].acceso == 0){
                response[i].obs = "NO";
            }
        }

        res.send(response);
    });
    
});

router.post("/user-search", urlEncodeParser, function(req, res) {
    var sql = `SELECT a.id_empleado AS id, CONCAT(b.nombre," ",b.apellido) AS nombre, c.nombre_departamento AS departamento, d.nombre_cargo AS cargo, e.estatus_acceso AS acceso
                FROM tbl_empleados a
                INNER JOIN tbl_persona b
                ON a.codigo_persona_fk = b.codigo_persona
                INNER JOIN tbl_cargos d
                ON a.codigo_cargo_fk = d.codigo_cargo
                INNER JOIN  tbl_departamento c
                ON d.codigo_departamento_fk = c.codigo_departamento
                INNER JOIN tbl_solicitud_acceso e
                ON a.codigo_empleado = e.codigo_empleado_fk
                WHERE a.id_empleado = ?`;

    var values = [req.body.id];

    realizarQuery(sql, values, function(response){
        
        for(let i=0; i < response.length; i++){
            if(response[i].acceso == 1){
                response[i].obs = "SI";
            }else if(response[i].acceso == 0){
                response[i].obs = "NO";
            }
        }

        res.send(response);
    });
    
});

router.post("/myInfo", urlEncodeParser, function(req, res) {
    var sql = `SELECT a.id_empleado AS id, CONCAT(b.nombre," ",b.apellido) AS nombre, c.nombre_departamento AS departamento, d.nombre_cargo AS cargo
                FROM tbl_empleados a
                INNER JOIN tbl_persona b
                ON a.codigo_persona_fk = b.codigo_persona
                INNER JOIN tbl_cargos d
                ON a.codigo_cargo_fk = d.codigo_cargo
                INNER JOIN  tbl_departamento c
                ON d.codigo_departamento_fk = c.codigo_departamento
                WHERE a.id_empleado = ?`;

    var values = [req.body.id];

    realizarQuery(sql, values, function(response){
        res.send(response);
    });
    
});

router.post('/cambiarPass', urlEncodeParser, function(req, res){

    var hash = sha512(req.body.pass);
    var password = hash.toString('hex');
    var sql = `UPDATE tbl_empleados SET contrasena = ? WHERE id_empleado = ?`;
    var values = [password, req.body.id];
    
    realizarQuery(sql, values, function(response){
        res.send(response);
    });
});

router.post("/otorgar", urlEncodeParser, function(req, res) {
    var sql = `UPDATE tbl_solicitud_acceso SET estatus_acceso = 1 
                WHERE codigo_empleado_fk = (
                SELECT codigo_empleado 
                FROM tbl_empleados
                WHERE id_empleado = ?)`;
    
    var values = [req.body.id];

    realizarQuery(sql, values, function(response){
        res.send(response);
    });
});

router.post("/quitar", urlEncodeParser, function(req, res) {
    var sql = `UPDATE tbl_solicitud_acceso SET estatus_acceso = 0 
                WHERE codigo_empleado_fk = (
                SELECT codigo_empleado 
                FROM tbl_empleados
                WHERE id_empleado = ?)`;
    
    var values = [req.body.id];

    realizarQuery(sql, values, function(response){
        res.send(response);
    });
});




module.exports = router;
