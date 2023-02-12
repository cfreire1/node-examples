const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//cors - uso simple, (permita todo)
app.use(cors());

 //Routes
app.use('/example' ,require('./routes/example/example-mok-api'));
app.use('/example2' ,require('./routes/example2/example-mok-api'));

//Configuraciones
app.set('port', process.env.PORT || 3001);
app.set('json spaces', 2)
 
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
 
//Iniciando el servidor
app.listen(app.get('port'),()=>{
    console.log(`Server listening http://localhost:${app.get('port')}`);
});