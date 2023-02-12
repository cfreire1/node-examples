const { Router } = require('express');
const router = Router();

//import leer archivos
const fs = require('fs');

//# import body-parser (Para poder recibir responses json)
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({extended:true}));
router.use(body_parser.json())

//data ===========================================================
//n/a

//url - fake apis  ===============================================
var endpoint_fake = 
                {
                    master_url_mapping: '/example2',
                    example_get : '/example-get',
                };

//fake apis - test ===============================================
console.log(endpoint_fake)

router.get(endpoint_fake.example_get, (req, res) => {  
    res.json({'message':'Hola mundo'});
})
 
module.exports = router;