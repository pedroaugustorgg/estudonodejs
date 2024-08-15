// Importação de modulos
var express = require('express');
let {engine} = require('express-handlebars');
var bodyParser = require('body-parser');
var fetch = require('node-fetch');

// App
var app = express();

// BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Template
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

//Especificar arquivos estáticos
app.use(express.static(__dirname + '/public'));

// Rotas
app.get('/', (req, res) => {
    fetch('http://localhost:3000/alunos', {method:'GET'})
    .then(response => response.json())
    .then(response => res.render('index', {data: response}));
});

//Servidor
app.listen(8080);