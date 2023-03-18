const { Router } = require('express');
const router = Router();

//import leer archivos
const fs = require('fs');

//# import body-parser (Para poder recibir responses json)
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({extended:true}));
router.use(body_parser.json())

var data = fs.readFileSync('src/datos/db.js');
var jsondb = JSON.parse(data);

console.log('============================================')
console.log('= Listado de endpoint generados')
console.log('============================================')
/**
 * [Leyenda]
 * 200: OK
 * 400: Solicitud incorrecta
 * 401: No autorizado
 * 403: Prohibido
 * 404: No encontrado
 * 405: Método no permitido
 * 406: No aceptable
 * 408: Tiempo de espera de solicitud
 * 409: Conflicto
 * 412: Error de condición previa
 * 429: Demasiadas solicitudes
 * 500: Error interno del servidor
 * 501: No implementado
 * 502: Puerta de enlace incorrecta
 * 503: Servicio no disponible
 * 504: Tiempo de espera de puerta de enlace
 */
for(let i = 0; i < jsondb.length; i++){
    //200
    if (jsondb[i].type === 'json') {
        if(jsondb[i].http === 'get') {
            log(i,jsondb);
            router.get(jsondb[i].endpoint, (req, res) => { 
                res.status(jsondb[i].status)
                res.json(jsondb[i].response);
            })
        }
        if(jsondb[i].http === 'post') {
            log(i,jsondb);
            router.post(jsondb[i].endpoint, (req, res) => { 
                res.status(jsondb[i].status)
                res.json(jsondb[i].response);
            })
        }
        if(jsondb[i].http === 'delete') {
            log(i,jsondb); 
            router.delete(jsondb[i].endpoint, (req, res) => {
                res.status(jsondb[i].status)
                res.json(jsondb[i].response);
            })
        }
        if(jsondb[i].http === 'put') {
            log(i,jsondb);
            router.put(jsondb[i].endpoint, (req, res) => {
                res.status(jsondb[i].status)
                res.json(jsondb[i].response);
            })
        }
    }
    if (jsondb[i].type === 'xml') {
        if(jsondb[i].http === 'get') {
            log(i,jsondb);
            router.get(jsondb[i].endpoint, (req, res) => { 
                res.header('Content-Type', 'application/xml')
                res.status(jsondb[i].status)
                var data = fs.readFileSync('src/datos/'+jsondb[i].response);
                res.send(data)
            })
        }
    }
}
console.log('============================================')
function log(i,jsondb){
    console.log('['+i+']['+jsondb[i].status+']'+jsondb[i].http+':'+jsondb[i].endpoint);
}
module.exports = router;