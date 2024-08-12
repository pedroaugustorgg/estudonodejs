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
// Linha 6: Criação da variavel 'app', com o método express - Para poder ter acesso a rotas e ao próprio servidor
// Linha 8, 9 e 10: Template - Configuração dos arquivos .handlebars
// Linha 12: Especificação do local com CSS e imagens contidas no servidor, o app.use serve para implementar uma ação. O "express.static" serve para especificar um diretório estático
// Linha 14: Configuração do BodyParser - formato de requisição definido como JSON
// Linha 17: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 21: Rota - A função res está chamando a classe "sendFile" para adicionar o arquivo "pagina.html" no servidor em execução
// Linha 23: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 23: Declaração de variável com escopo de bloco
// Linha 29: Retornando para o arquivo 'inicio.handlebars' a declaração da variável 'aprendendoNode' que recebe o valor 'true'(com o 'aprendendoNode:true') e declarando a variável 'dados' para receber conteúdo da variável 'pessoas' (com o 'dados:pessoas')
// Linha 32: Rota - O método GET está sendo utilizado para obtenção de dados do servidor
// Linha 36: Rota - O método POST está sendo utilizado para registrar no servidor
// Linha 41: Congiguração de Servidor - Definição de porta para execução do servidor