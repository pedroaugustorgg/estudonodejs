// Importar módulo http (nativo do node, não precisa criar o arquivo em questão)
var http = require('http');

//Criando um servidor: 
http.createServer(function(req, res){
    res.write('NodeJS: Esta escrita esta sendo retornada via res.write')
    res.end();
}).listen(8080);

//Linha 5: Módulo http chamando a função 'createServer' com as funções de 'req' e 'res', onde 'req' (servidor recebendo dados), 'res' (servidor enviando/retornando dados)
//Linha 6: Enviando uma escrita em tela para o servidor
//Linha 7: Finalizando o envio de dados para o servidor
//Linha 8: Finalização da função 'createServer' + definição de porta para execução do servidor
//Para executar o servidor, basta executar este arquivo no terminal com o comando: node modulohttp.js