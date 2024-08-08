// Importar o express
var express = require('express');

// Criando variável para ter acesso as funcionalidades do Express
var app = express();

// Criando uma rota
app.get('/', function(req, res){
    res.write('Servidor rodando utilizando o Express');
    res.end();
})

// Servidor
app.listen(8080);