/*
 * El proposito de crear un modulo 'conexion' es para ahorrar codigo que se
 * utilizara en todo el proyecto.
 *
 * Una vez que se inicia el proyecto se hace una conexion a la base de datos
 * mediante el metodo 'connect', y segun lei en foros se recomienda mantener una
 * conexion establecida a lo largo del uso de la aplicacion en lugar de estar
 * connect, end, connect, end, connect.
 *
 * 
 * https://stackoverflow.com/questions/14087924/cannot-enqueue-handshake-after-invoking-quit
 */

var mysql = require('mysql');

var conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_bm"
});

conexion.connect(function(err) {
  if (err) throw err;
  console.log("Conexion a BD de BIOMEDICS Management exitosa.");
});

exports.conexion;
/*
 * Utilizamos exports para poder hacer uso de esta funcion en otros modulos.
 * Para mas informacion sobre exports: http://darrenderidder.github.io/talks/ModulePatterns/#/7
 * La funcion realizarQuery recibe como parametros una sentencia SQL y un arreglo de argumentos
 * Con esta funcion pueden hacerse INSERTS, SELECTS, DELETS, ETC.
 */
exports.realizarQuery = function(sql, arreglo, callback) {
  conexion.query(sql, arreglo, (err, result) => {
    if (err) throw err;
    callback(result);
    //console.log(JSON.stringify(result)+'DESDE realizarQuery');
    //return result;
  });
}



/*
 * A esta funcion se le agrego un callback, para poder
 * retornar el result (lo que se obtuvo de la consulta)
 * con el fin de hacer el JSON stringify
 * para enviar la informacion cuando hay un success
 * al hacer la peticion AJAX
 */

exports.QueryIEM = function(sql, values, sql2, values2, callback){
    conexion.query(sql, values, (err, result) => {
      if (err){ 
          throw err;
      } else {
        conexion.query('SELECT codigo_datos_tecnicos as codigo_dt FROM tbl_datos_tecnicos ORDER BY codigo_datos_tecnicos DESC LIMIT 1', (err, result) => {
          if (err){ 
            throw err;
        } else {
          values2.push(result[0].codigo_dt);
          conexion.query(sql2, values2, (err, result) => {
            if (err) throw err;
            callback(result);
          });
        }
        });
      }
    });
}


exports.realizarQrCB = function(sql, arreglo, sql2, arreglo2, sql3, arreglo3, callback) {

  //  connection.query( 'SELECT * FROM some_table', ( err, rows ) => {
  // do something with the results here
  //} );
  // the following code is executed *before* the query is executed

  conexion.query(sql, arreglo, (err, result) => {
    if (err) {
      console.log("Error 1: "+err);
      throw err;
    } else {
      conexion.query('SELECT codigo_persona AS persona FROM tbl_persona ORDER BY codigo_persona DESC LIMIT 1', (err, result) => {
        if (err) {
          console.log("Error 2: "+err);
          throw err;
        } else {
          arreglo2.push(result[0].persona);
          conexion.query(sql2, arreglo2, (err, result) => {
            if (err){
              console.log("Error 3: "+err);
              throw err;
            } else {
              conexion.query('SELECT codigo_empleado AS empleado FROM tbl_empleados ORDER BY codigo_empleado DESC LIMIT 1', (err, result) => {
                if (err) {
                  console.log("Error 4: "+err);
                  throw err;
                } else {
                  arreglo3.push(result[0].empleado);
                  conexion.query(sql3, arreglo3, (err, result) => {
                    if (err) {
                      console.log("Error 5: "+err);
                      throw err;
                    } else {
                      callback(result);                      
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
}
