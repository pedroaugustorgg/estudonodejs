var http = require('http');

http.createServer(function(req, res){
    res.write('NodeJS: Esta escrita esta sendo retornada via res.write - Teste')
    res.end();
}).listen(8080);


//Linha 1: Importar módulo http (nativo do node, não precisa criar o arquivo em questão)
//Linha 3: Criando um servidor. Módulo http chamando a função 'createServer' com as funções de 'req' e 'res', onde 'req' (servidor recebendo dados), 'res' (servidor enviando/retornando dados)
//Linha 4: O res.write serve para escrever algo em tela para o usuário durante a execução do servidor
//Linha 5: O res.end é necessário pois o servidor não compreende que deve ser encerrado após o res.write. Isso irá forçar a finalização do envio de dados para o servidor
//Linha 6: Finalização da função 'createServer' + definição de porta para execução do servidor

//Dica 1: Para executar o servidor, basta executar este arquivo no terminal com o comando: node modulohttp.js

//Dica 2: Para manter uma execução que atualize automaticamente após alterações deste arquivo: basta utilizar o comando: node --watch modulohttp.js