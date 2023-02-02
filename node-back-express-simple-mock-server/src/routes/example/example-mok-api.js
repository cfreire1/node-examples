const { Router } = require('express');
const router = Router();

//import leer archivos
const fs = require('fs');

//# import body-parser (Para poder recibir responses json)
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({extended:true}));
router.use(body_parser.json())

//data ===========================================================
var json_data_1 = 
                {
                    status_200 : 'src/routes/example/data/json-data-1.json',
                    status_500 : 'src/routes/example/data/json-data-1-error.json'
                };

var json_data_2 = 
                {
                    status_200 : 'src/routes/example/data/json-data-2.json'
                };
var xml_data_1 = 
                {
                    status_200 : 'src/routes/example/data/xml-data-1.xml'
                };

//url - fake apis  ===============================================
var endpoint_fake = 
                {
                    example_get : '/example-get',
                    example_post : '/example-post',
                    example_post_xml : '/example-post.xml',
                    select_error : '/select-error'
                };

//fake apis - test ===============================================
router.put(endpoint_fake.example_get+'/:idvalor', (req, res) => {  
    var idvalor = req.params.idvalor;
    res.json({"idvalor": `Valor entregado por parametro es ${idvalor}`} );
})

router.get(endpoint_fake.example_get, (req, res) => {  
    var data = fs.readFileSync(json_data_1.status_200);
    var myObject= JSON.parse(data);
    res.json(myObject);
})

router.post(endpoint_fake.example_post, (req, res) => {    
    var data = fs.readFileSync(json_data_2.status_200);
    var myObject= JSON.parse(data);
    res.json(myObject);
})


router.get(endpoint_fake.example_post_xml, (req, res) => {
    res.header('Content-Type', 'application/xml')
    var data = fs.readFileSync(xml_data_1.status_200);
    res.send(data)
})

router.post(endpoint_fake.select_error, (req, res) => {
    var selector = req.body.selector;
    if(selector === 200){
        res.json({"Title": "Hola mundo post"});
    }
    if(selector === 500){
        res.status(500);
        var data = fs.readFileSync(json_data_1.status_500);
        var myObject= JSON.parse(data);
        res.json(myObject);
    }

})
 
module.exports = router;