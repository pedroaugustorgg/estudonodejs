//Importação de módulos | ⚠️ Fetch não irá funcioar ao executar este código em versões 3.00 ou acima
var fetch = require('node-fetch') 
import { fastify } from 'fastify'

//App
var app = fastify();

//Rota
app.get('/', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resposta => resposta.json())
    .then(resposta => console.log(resposta))

});

//Servidor
app.listen({port: 8080});

/*
DETALHAMENTO DE LINHAS

Linhas 2 e 3: Importação de módulos do node.
Linha 6: Importação do framework 'express'
Linha 9: Utilização do método app.get advindo do express.
Linha 10: Utilização posterior do método global 'fetch' com o processo de busca de um recurso da rede, retornando uma promessa que é cumprida assim que a resposta estiver disponível.
Linhas 11 e 12: Sequencia de retornos a serem executados após requisição do fetch ser concluída.
Linha 14: Encerramento do servidor para evitar um looping desnecessário na execução do fetch.
Linha 20: Congiguração de Servidor - Definição de porta para execução do servidor

*/