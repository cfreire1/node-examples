// imports middleware 
const express = require('express');
const router = express.Router();

//# import body-parser
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({extended:true}));
router.use(body_parser.json())
//------------------------------------
//servicios

/**
 * Metodo get
 * Envio: solicitud
 * Devuelve: string
 */
router.get('/get', (req, res) => {
     //Alguna operacion...

     //return
    res.send('Hello world');
});

/**
 * Metodo post
 * Envio: solicitud
 * Devuelve: string
 */
router.post('/post', (req, res) => {
    //Alguna operacion...

    //return
    res.send('Hello world');
});

/**
 * Metodo post
 * Envio: Objeto
 * Devuelve: string
 * Ejemplo input:
 * {
 *  "number": "1234567822",
 *  "citycode": "1",
 *  "contrycode": "57"
 *  }
 * 
 * 
 */
 router.post('/post/data', (req, res) => {
    //Recibiendo json 
    var number = req.body.number;
    var citycode = req.body.citycode;
    var contrycode = req.body.contrycode;

    //Alguna operacion...

    //return
    res.json({
        'user': number,
        'status':'solicitud recibida'
    });
});

/**
 * Metodo post
 * Envio: solicitud
 * Devuelve: Estructura json
 */
router.post('/post/json', (req, res) => {

    //return
    res.json({
        'nombre':'test1'
    });
});

/**
 * Metodo put
 * Envio: solicitud
 * Devuelve: string
 */
router.put('/put', (req, res) => {
    //Alguna operacion...
    
    //return
    res.send('Hello world');
});

/**
 * Metodo put
 * Envio: parametro por url
 * Devuelve: string con valor 
 */
router.put('/put/:idvalor', (req, res) => {
    var idvalor = req.params.idvalor;

    //Alguna operacion...
    
    //return
    res.send('Hello world '+idvalor);
});

/**
 * Metodo delete
 * Envio: solicitud
 * Devuelve: string
 */
router.delete('/delete', (req, res) => {
    //Alguna operacion...
    
    //return
    res.send('Hello world');
});

//generar que este modulo sea exportable
module.exports = router;