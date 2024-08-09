var express = require('express');

var app = express();

app.use(express.static(__dirname + '/complementos'));

app.get('/', function(req, res){ 
    res.sendFile(__dirname + '/pagina.html');
});

app.listen(8080);

// Linha 1: Importação do módulo/framework express
// Linha 3: Importação de função App, presente no módulo express - Para trabalhar com aplicativos do próprio express
// Linha 5: Especificação do local com CSS e imagens contidas no servidor, o app.use serve para implementar uma ação. O "express.static" serve para especificar um diretório estático
// Linha 7: Definição da rota. Ao acessar esta roda, a function será executada requisitando dados (através do req) e retornando informações (através do res)
// Linha 8: A função res está chamando a classe "sendFile" para enviar o arquivo "pagina.html" para o servidor em execução
// Linha 11: Definição de porta para execução do servidor