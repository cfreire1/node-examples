const express = require('express');
const router = express.Router();

//------------------------------------
//servicios routing

//get
router.get('/get', (req, res) => {
    res.send('Hello world');
});
//post
router.post('/post', (req, res) => {
    res.send('Hello world');
});
router.post('/post-json', (req, res) => {
    res.json({
        'nombre':'test1'
    });
});
//put
router.put('/put', (req, res) => {
    res.send('Hello world');
});

//delete
router.delete('/delete', (req, res) => {
    res.send('Hello world');
});

//generar que este modulo sea exportable
module.exports = router;