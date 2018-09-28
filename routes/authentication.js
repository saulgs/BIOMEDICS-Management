var express = require('express');
var bodyParser = require("body-parser");
var sha512 = require('sha512');


var session = require("express-session");
var cookieParser = require("cookie-parser");

var realizarQuery = require('../modulos/conexion').realizarQuery;

var router = express.Router();

var urlEncodeParser = bodyParser.urlencoded({
  extended: false
});


router.use(bodyParser.json());
router.use(cookieParser());
router.use(session({secret:'sesionBM', resave:true, saveUninitialized:true}));

var bosses = express.static(__dirname+"/public/bosses/");
var techs = express.static(__dirname+"/public/techs/");


/*
* Esta función se agregó para la escalabilidad del sistema
* Es para agreagar seguridad a una ruta especifica
* Si se agregan nuevas páginas o módulos se debe
* utilizar esta funcion para verificar si existe una sesión
*/
function verificarAutenticacion(req, res, next){
    if(req.session.estatus == 1){
		return next();
    }else{
        res.send({status:0, mensaje:"401 Acceso no autorizado"});
    }
}

function sesionBoss(req, res, next){
    if (req.session.codigoCargo == 1)
        bosses(req, res, next);
    else
        res.send({status:0, mensaje:"401 Acceso no autorizado"});
}

function sesionTech(req, res, next){
    if (req.session.codigoCargo == 2)
        techs(req, res, next);
    else
        res.send({status:0, mensaje:"401 Acceso no autorizado"});
}



router.post('/login', urlEncodeParser, function(req, res){

    var hash = sha512(req.body.contrasena);
    var pass = hash.toString('hex');
    var sql = `SELECT a.codigo_empleado AS codigo, a.id_empleado AS id, a.codigo_cargo_fk AS cargo, a.contrasena, b.estatus_acceso AS estatus 
                FROM tbl_empleados a
                INNER JOIN tbl_solicitud_acceso b
                ON a.codigo_empleado = b.codigo_empleado_fk 
                WHERE id_empleado=? and contrasena=?`;
    var values = [req.body.id, pass];
    
    realizarQuery(sql,values, function(response){
        if(response.length > 0 && response[0].estatus == 1){
            if(response[0].cargo == 1){
                req.session.id = response[0].id;
                req.session.codigoCargo = response[0].cargo;
                req.session.estatus = response[0].estatus;
                res.cookie('codigo', response[0].codigo);
                res.cookie('id', response[0].id);
                res.send({status:1, mensaje:"Accedio correctamente", url:"bosses/bosses.html"});
            } else if (response[0].cargo == 2){
                req.session.id = response[0].id;
                req.session.codigoCargo = response[0].cargo;
                res.cookie('codigo', response[0].codigo);
                res.cookie('id', response[0].id);
                res.send({status:1, mensaje:"Accedio correctamente", url:"techs/techs.html"});
            }
        } else if(response.length > 0 && response[0].estatus == 0) {
            req.session.destroy();
			res.send({status:2, mensaje:"Acuda al Jefe del departamento de Biomédica para que autorice su acceso"});
        } else {
            req.session.destroy();
			res.send({status:0, mensaje:"401 Acceso no autorizado"});
        }
    });
});


router.get("/logout", function(req, res){
        res.clearCookie('id');
		req.session.destroy();
        res.send({status:1, mensaje:"Ha terminado la sesion", url: "/index.html"});
        
});

router.post('/getSessionBoss', verificarAutenticacion, function(req, res, next){
    sesionBoss(req, res, next);
	res.send(JSON.stringify(req.session));
});

router.post('/getSessionTechs', verificarAutenticacion, function(req, res, next){
    sesionTech(req, res, next);
	res.send(JSON.stringify(req.session));
});


module.exports = router;