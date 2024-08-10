var express = require('express');
var { engine } = require('express-handlebars');


// var bodyParser = require('body-parser');

const app = express();

app.engine('handlebars', engine({defaultLayout:'index'}));
app.set('view engine',"handlebars")
app.set('views','views')

// app.use(express.static(__dirname + '/complementos'));

/*app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));*/

/*app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/pagina.html');
});*/

app.get('/', (req, res) => { 
    
    let pessoas = [
        {"nome":"Pedro", "idade": 28},
        {"nome":"Helen", "idade": 29},
        {"nome":"João Diogo", "idade": 15},
    ]

    res.render('inicio', {aprendendoNode:true, dados:pessoas});
});

app.get('/sobre', (req, res) => { 
    res.render('sobre');
});

/*app.post('/receber', (req, res) => {
    res.write('O nome informado eh: '+req.body.nome);
    res.end();
});*/

app.listen(8080);

// Linha 1: Importação do módulo/framework express
// Linha 4: Importação do módulo/framework body-parser
// Linha 7: Criação da variavel 'app', com o método express - Para poder ter acesso a rotas e ao próprio servidor
// Linha 9: Template - Configuração dos arquivos .handlebars
// Linha 13: Especificação do local com CSS e imagens contidas no servidor, o app.use serve para implementar uma ação. O "express.static" serve para especificar um diretório estático
// Linha 15: Configuração do BodyParser - formato de requisição definido como JSON
// Linha 16: Configuração do BodyParser - Permissão para tratar dados através do método POST
// Linha 18: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 19: Rota - A função res está chamando a classe "sendFile" para adicionar o arquivo "pagina.html" no servidor em execução
// Linha 22: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 24: Declaração de variável com escopo de bloco
// Linha 30: Retornando para o arquivo 'inicio.handlebars' a declaração da variável 'aprendendoNode' que recebe o valor 'true'(com o 'aprendendoNode:true') e declarando a variável 'dados' para receber conteúdo da variável 'pessoas' (com o 'dados:pessoas')
// Linha 33: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 37: Rota - O método POST está sendo utilizado para registrar no servidor
// Linha 42: Congiguração de Servidor: - Definição de porta para execução do servidor