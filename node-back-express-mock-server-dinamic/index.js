const express = require('express');
const app = express();
const cors = require('cors');

//cors - uso simple, (permita todo)
app.use(cors());

 //Routes
app.use('' ,require('./src/middleware/endpoint-generator'));

//Configuraciones
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2)
 
//Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening http://localhost:${app.get('port')}`);
});