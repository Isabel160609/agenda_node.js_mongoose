// importamos express
const express = require('express');
// importamos morgan
const morgan = require('morgan')
//importamos cors para no tener problemas con las peticiones de distintos origenes
const cors = require('cors');

//importamos express
const app = express();

//le imformamos de que puede recibir por varios puertos
app.set('port', process.env.PORT || 3000)


app.use(cors());
app.use(morgan('dev'));
//para que pueda leer json
app.use(express.json());
//para que lea lo q viene de un formulario html
app.use(express.urlencoded({extended: false}));

//importamos el modulo de rutas
app.use(require('./routes/persona.routes'))

//exportamos este modulo
module.exports = app;