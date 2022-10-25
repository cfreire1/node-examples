const express = require('express');
const routerApi = require('./routes/mainRutes');
var pgp = require("pg-promise")(/*options*/)

//creacion de server
const app = express();
const port = 3000;

//port
app.listen(port, () => {
    console.log('Server on port '+port)
})


//=========================================
routerApi(app);