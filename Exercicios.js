/* Uma escola está cadastrando um novo aluno. Crie uma variável ou constante para cada uma das informações abaixo (escolha let ou const pensando se o valor pode mudar depois):

nome completo (string);
idade (number);
cidade (string);
se está matriculado (boolean);
altura em metros (number, ex: 1.70);
turma (string, ex: "3A"). */
/*
const readline = require('readline-sync');

// Coleta de dados do aluno
const fullName = readline.question('Digite seu nome completo: ');
console.log(`Nome completo: ${fullName}`);

let age = Number(readline.question('Digite sua idade: '));
console.log(`Idade: ${age}`);

let city = readline.question('Digite sua cidade: ');
console.log(`Cidade: ${city}`);

let isEnrolled = readline.keyInYN('Está matriculado? (y/n): ');
console.log(`Está matriculado: ${enrolled}`);

let height = Number(readline.question('Digite sua altura em metros (ex: 1.70): '));
console.log(`Altura: ${height}m`);
let turma = readline.question('Digite a turma (ex: 3A): ');
console.log(`
    `); */

//exercicio 2
/*  Escolha um videogame real e atual (por exemplo: PlayStation 5, Xbox Series X, Nintendo Switch 2). Execute as informações reais dele e represente em variáveis:

nome do console (string);
Ordem (string);
preço médio em reais (número);
conta em GB (número);
se possui leitor de mídia física (booleano).
Exiba todas as informações no console, uma por linha, com um texto explicando o que é cada valor (ex: "Storage: 825 GB").*/
/*
const redline = require('readline-sync');
const consoleName = "PlayStation 5";
const brand = "Sony";
const price = 4999.99;
const storage = 825;
const hasPhysicalMediaReader = true;

console.log(`
    product name: ${consoleName}
    Brand: ${brand}
    Price: R$ ${price.toFixed(2)}
    Storage: ${storage} GB
    Has Physical Media Reader: ${hasPhysicalMediaReader}
`);*/

//Exercicio 3
/* Guarde cada um dos valores abaixo em uma variável diferente:

"250"
250
true
"false"
"JavaScript"
3.14159
Para cada variável, use typeofe exiba no console uma mensagem no formato:

Value: 250 | Type: number */

/*
const val1 = "250";
const val2 = 250;
const val3 = true;
const val4 = "false";
const val5 = "JavaScript";
const val6 = 3.14159;

console.log(`Value: ${val1} | Type: ${typeof val1}`);
console.log(`Value: ${val2} | Type: ${typeof val2}`);
console.log(`Value: ${val3} | Type: ${typeof val3}`);
console.log(`Value: ${val4} | Type: ${typeof val4}`);
console.log(`Value: ${val5} | Type: ${typeof val5}`);
console.log(`Value: ${val6} | Type: ${typeof val6}`);
*/

// Exercicio 4
/* Um sistema recebeu os seguintes dados, todos como texto (string):

idade:"22"
πρ ...�:"2850.50"
Com filhos:"1"
Para cada dado:

Exiba o valor e o tipo original (com typeof).
Converta para o tipo numérico usando Number().
Exiba o valor convertido e o novo tipo (com typeof).
Exemplo de saída esperada para um dos dados:

Age (before): 22 | Type: string
Age (after): 22 | Type: number */
/*
let age = "22";
let pi = "2850.50";
let hasChildren = "1";

console.log(`Age (before): ${age} | Type: ${typeof age}`);
age = Number(age);
console.log(`Age (after): ${age} | Type: ${typeof age}`);

console.log(`Pi (before): ${pi} | Type: ${typeof pi}`);
pi = Number(pi);
console.log(`Pi (after): ${pi} | Type: ${typeof pi}`);

console.log(`Has Children (before): ${hasChildren} | Type: ${typeof hasChildren}`);
hasChildren = Number(hasChildren);
console.log(`Has Children (after): ${hasChildren} | Type: ${typeof hasChildren}`);  
*/

//Exercico 5
/*  Uma pessoa comprou os seguintes itens:

teclado: R$ 249,90
mouse: R$ 119,90
fone de ouvido: R$ 349,90
Guarde cada preço em uma variável e calcule:

Valor total da compra (soma dos três itens);
Valor médio por item (total dividido por 3);
Quanto sobra do troco se a pessoa pagar com R$ 1.000,00.
Exiba os três resultados no console, cada um em uma linha, 
com um texto explicando o que é.*/
const redline = require('readline-sync');

let keyboardPrice = 249.90;
let mousePrice = 119.90;
let headsetPrice = 349.90;

let totalPurchase = keyboardPrice + mousePrice + headsetPrice;
let averagePrice = totalPurchase / 3;
let change = 1000 - totalPurchase;

console.log(`Total da compra: R$ ${totalPurchase.toFixed(2)}`);
console.log(`Preço médio por item: R$ ${averagePrice.toFixed(2)}`);
console.log(`Troco ao pagar com R$ 1.000,00: R$ ${change.toFixed(2)}`);     




































































































































































































































