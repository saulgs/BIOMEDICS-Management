var express = require('express');
var bodyParser = require("body-parser");
/*
 * Importamos la funcion realizarQuery para facilitar la insercion de informacion
 * en la base de datos
 */
var QueryIEM = require('../modulos/conexion').QueryIEM;
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

router.post("/ingresar-equipo", urlEncodeParser, function(req, res) {
    var sql = `INSERT INTO tbl_datos_tecnicos (codigo_tipo_alimentacion_fk, 
                                            codigo_relacion_paciente_fk, 
                                            codigo_funcion_maquina_fk, 
                                            codigo_uso_especifico_fk, 
                                            codigo_mov_equipo_fk, 
                                            voltaje_trabajo_ac, 
                                            voltaje_trabajo_dc, 
                                            potencia, 
                                            corriente_max, 
                                            frec_electrica, 
                                            modo_funcionamiento, 
                                            parametro_medicion) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    var values = [req.body.ta,
        req.body.rp,
        req.body.fm,
        req.body.ue,
        req.body.me,
        req.body.ac,
        req.body.dc,
        req.body.pt,
        req.body.cm,
        req.body.freq,
        req.body.mf,
        req.body.pm];

    var sql2 = `INSERT INTO tbl_equipo_medico(codigo_tipo_manual_fk, 
                                            nombre, 
                                            modelo, 
                                            serie, 
                                            codigo_hospital, 
                                            marca, 
                                            ubicacion, 
                                            tipo_adquisicion, 
                                            fabricante, 
                                            distribuidor,  
                                            codigo_datos_tecnicos_fk) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    var values2 = [req.body.tm,
        req.body.nombre,
        req.body.modelo,
        req.body.serie,
        req.body.ch,
        req.body.marca,
        req.body.ubicacion,
        req.body.tad,
        req.body.fab,
        req.body.dist];

    QueryIEM(sql, values, sql2, values2, function(response){
        res.send(response);
    });
});

router.post("/obtener-equipo", urlEncodeParser, function(req, res) {
    var sql = `SELECT a.codigo_equipo_medico AS codigo, 
                b.tipo_manual AS manual, 
                a.nombre AS nombre, 
                a.modelo AS modelo, 
                a.serie AS serie, 
                a.codigo_hospital AS ch, 
                a.marca AS marca, 
                a.ubicacion AS ub, 
                a.tipo_adquisicion AS ta, 
                a.fabricante AS fab, 
                a.distribuidor AS dist 
                FROM tbl_equipo_medico a
                INNER JOIN tbl_tipo_manual b
                ON a.codigo_tipo_manual_fk = b.codigo_tipo_manual
                WHERE a.codigo_hospital = ?`;

    var values = [req.body.id];

    realizarQuery(sql, values, function(response){
        res.send(response);
    });
});

router.post("/obtener-tmant", urlEncodeParser, function(req, res) {
    var sql = `SELECT codigo_tipo_mantenimiento AS codigo, tipo_mantenimiento AS tipo FROM tbl_tipo_mantenimiento`;
    var values = [];

    realizarQuery(sql, values, function(response){
        res.send(response);
    });
});

router.post("/mant-x-eq", urlEncodeParser, function(req, res){
    var sql = `SELECT b.id_empleado AS id, c.tipo_mantenimiento AS mant, a.descripcion_mant AS des, a.fecha AS fecha 
                FROM tbl_mantenimiento a
                INNER JOIN tbl_empleados b
                ON a.codigo_empleado_fk = b.codigo_empleado
                INNER JOIN tbl_tipo_mantenimiento c
                ON a.codigo_tipo_mantenimiento_fk = c.codigo_tipo_mantenimiento
                WHERE a.codigo_equipo_medico_fk = ?`;

    var values = [req.body.codigo];

    realizarQuery(sql, values, function(response){
        res.send(response);
    });

});

router.post("/ultimo-mant", urlEncodeParser, function(req, res){
    var sql = `SELECT a.codigo_mantenimiento, b.id_empleado AS id, c.tipo_mantenimiento AS mant, a.descripcion_mant AS des, a.fecha AS fecha 
                FROM tbl_mantenimiento a
                INNER JOIN tbl_empleados b
                ON a.codigo_empleado_fk = b.codigo_empleado
                INNER JOIN tbl_tipo_mantenimiento c
                ON a.codigo_tipo_mantenimiento_fk = c.codigo_tipo_mantenimiento
                WHERE a.codigo_equipo_medico_fk = ?
                ORDER BY a.codigo_mantenimiento DESC LIMIT 1`;

    var values = [req.body.codigo];

    realizarQuery(sql, values, function(response){
        res.send(response);
    });

});

router.post("/ingresar-mant", urlEncodeParser, function(req, res) {
    var sql = `INSERT INTO tbl_mantenimiento(codigo_empleado_fk, 
                                            codigo_equipo_medico_fk, 
                                            codigo_tipo_mantenimiento_fk, 
                                            descripcion_mant, 
                                            fecha) 
                VALUES (?, ?, ?, ?, SYSDATE())`;
    var values = [req.body.codigoId, req.body.codigo, req.body.tmant, req.body.mantenimiento];

    realizarQuery(sql, values, function(response){
        res.send(response);
    });
});

router.post("/obtener-datos-esp", urlEncodeParser, function(req, res) {

    var sql = `SELECT codigo_tipo_alimentacion AS codigo, tipo_alimentacion AS tipo FROM tbl_tipo_alimentacion
                UNION ALL
                SELECT codigo_relacion_paciente, tipo_relacion FROM tbl_relacion_paciente
                UNION ALL
                SELECT codigo_funcion_maquina, tipo_funcion_maquina FROM tbl_funcion_maquina
                UNION ALL
                SELECT codigo_mov_equipo, tipo_mov_equipo FROM tbl_mov_equipo
                UNION ALL
                SELECT codigo_uso_especifico, tipo_uso_especifico FROM tbl_uso_especifico
                UNION ALL
                SELECT codigo_tipo_manual, tipo_manual FROM tbl_tipo_manual`;
    var values = [];
    
    realizarQuery(sql, values, function(response){
        res.send(response);
    });
});

module.exports = router;
