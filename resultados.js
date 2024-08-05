//Importar arquivo de calculos contido na mesma pasta do 'resultados.js'
var calculos = require('./calculos');

//Obter função para somar
var somar = calculos.somar;
//Realizar operação
console.log(somar(5, 6));

//Obter função para multiplicar
var multiplicar = calculos.multiplicar;
//Realizar operação
console.log(multiplicar(5, 6));

//Obter função para subtrair
var subtrair = calculos.subtrair;
//Realizar operação
console.log(subtrair(5, 6));

//Obter função para dividir
var dividir = calculos.dividir;
//Realizar operação
console.log(dividir(5, 6));