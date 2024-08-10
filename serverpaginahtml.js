var express = require('express');
// var exphbs = require('express-handlebars');

// var bodyParser = require('body-parser');

var app = express();

//app.engine('handlebars', exphbs());

app.use(express.static(__dirname + '/complementos'));

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));*/

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/pagina.html');
});

/*app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/formulario.html');
});*/

/*app.post('/receber', (req, res) => {
    res.write('O nome informado eh: '+req.body.nome);
    res.end();
});*/

app.listen(8080);

// Linha 1: Importação do módulo/framework express
// Linha 2: Importação do módulo/framework express-handlebars
// Linha 4: Importação do módulo/framework body-parser
// Linha 6: Criação da variavel 'app', com o método express - Para poder ter acesso a rotas e ao próprio servidor
// Linha 8: Template - Configuração dos arquivos .handlebars
// Linha 10: Especificação do local com CSS e imagens contidas no servidor, o app.use serve para implementar uma ação. O "express.static" serve para especificar um diretório estático
// Linha 12: Configuração do BodyParser - formato de requisição definido como JSON
// Linha 13: Configuração do BodyParser - Permissão para tratar dados através do método POST
// Linha 15: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 16: Rota - A função res está chamando a classe "sendFile" para adicionar o arquivo "pagina.html" no servidor em execução
// Linha 19: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 20: Rota - A função res está chamando a classe "sendFile" para adicionar o arquivo "formulário.html" no servidor em execução
// Linha 23: Rota - O método POST está sendo utilizado para registrar no servidor
// Linha 28: Congiguração de Servidor: - Definição de porta para execução do servidor