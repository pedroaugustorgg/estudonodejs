var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/complementos'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

/*app.get('/', function(req, res){ 
    res.sendFile(__dirname + '/pagina.html');
});*/

app.get('/', function(req, res){ 
    res.sendFile(__dirname + '/formulario.html');
});

app.post('/receber', function(req, res){
    res.write('O nome informado eh: '+req.body.nome);
    res.end();
});

app.listen(8080);

// Linha 1: Importação do módulo/framework express
// Linha 3: Importação do módulo/framework body-parser
// Linha 5: Importação de função App, presente no módulo express - Para trabalhar com aplicativos do próprio express
// Linha 7: Especificação do local com CSS e imagens contidas no servidor, o app.use serve para implementar uma ação. O "express.static" serve para especificar um diretório estático
// Linha 9: Configuração do BodyParser - formato de requisição definido como JSON
// Linha 10: Configuração do BodyParser - Permissão para tratar dados através do método POST
// Linha 12: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 13: Rota - A função res está chamando a classe "sendFile" para adicionar o arquivo "pagina.html" no servidor em execução
// Linha 16: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 17: Rota - A função res está chamando a classe "sendFile" para adicionar o arquivo "formulário.html" no servidor em execução
// Linha 20: Rota - O método POST está sendo utilizado para registrar no servidor
// Linha 25: Congiguração de Servidor: - Definição de porta para execução do servidor