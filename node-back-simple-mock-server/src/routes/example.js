const { Router } = require('express');
const router = Router();

//# import body-parser (Para poder recibir responses json)
const body_parser = require('body-parser');
router.use(body_parser.urlencoded({extended:true}));
router.use(body_parser.json())

//apis
router.get('/example-get', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo usando rutas! get"
        }
    );
})

router.post('/example-post', (req, res) => {    
    res.json(
        {
            "Title": "Hola mundo usando rutas! post"
        }
    );
})

router.post('/select-error', (req, res) => {
    var selector = req.body.selector;
    if(selector === 200){
        res.json(
            {
                "Title": "Hola mundo usando rutas! post"
            }
        );
    }
    if(selector === 500){
        res
        .status(500)
        .json(
            {
                "Title": "Hola mundo usando rutas! error 500"
            }
        );
    }

})
 
module.exports = router;