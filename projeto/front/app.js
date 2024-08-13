// Importação de modulos
var express = require('express');
let {engine} = require('express-handlebars')
var bodyParser = require('body-parser');

// App
var app = express();

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Template
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

// Rotas
app.get('/', (req, res) => {
    res.render('index');
});

//Servidor
app.listen(8080);