// Importar o express
var express = require('express');

// Criando variável para ter acesso as funcionalidades do Express
var app = express();

// Criando rotas para o servidor
app.get('/', function(req, res){
    res.write('Servidor rodando utilizando o Express');
    res.end();
})

// Porta à ser utilizada na exeução do servidor
app.listen(8080);