/* Operadores*/
/*const sum = 3 + 4;
const MultiplicationDivision = (3 * 5) / 2;
const SubtractionMultiplication = (4 - 5) * -1;
const RemainderDivision = 234 % 5;

console.log("Soma de 3 e 4:", sum);
console.log("Multiplicação de 3 e 5 dividida por 2:", MultiplicationDivision);
console.log("Subtração de 5 de 4 multiplicada por -1:", SubtractionMultiplication);
console.log("Resto da divisão de 234 por 5:", RemainderDivision);
*/



/* Comparadores:
 */
/*const firstNumber = 10;
const secondNumber = 20;

const isEqual = firstNumber === secondNumber;
const isNotEqual = firstNumber !== secondNumber;
const isGreaterThan = firstNumber > secondNumber;
const isLessThan = firstNumber < secondNumber;

console.log("O primeiro número é igual ao segundo?", isEqual);
console.log("O primeiro número é diferente do segundo?", isNotEqual);
console.log("O primeiro número é maior que o segundo?", isGreaterThan);
console.log("O primeiro número é menor que o segundo?", isLessThan); 
*/   

/* Operadores Lógicos: 03-07-2026
 */
/*const isTrue = true;
const isFalse = false;

const andOperator = isTrue && isFalse;
const orOperator = isTrue || isFalse;
const notOperator = !isTrue;

console.log("Resultado do operador AND (&&):", andOperator);
console.log("Resultado do operador OR (||):", orOperator);
console.log("Resultado do operador NOT (!):", notOperator); 
*/

/* crie 3 variaveis: a,b, c. Atribua os valores true, false e true, respectivamente a = true   b = false  c = true 
Realize a operação: a && b
Realize a operação: b && c
Realize a operação: a && c
Realize a operação: a && b && c */

/*1.false console.log(a && b)
2.false console.log(b && c)
3.true console.log(a && c)
4.false console.log(a && b && c)
*/

/* Exercicio 4
 Crie 3 variáveis: a,b e c. 
 Atribua os valores true, false e true. respectivamente a = true
 b = false
 c = true*/

 /*
 a = true
 b = false
 c = true

 console.log(a || b)
 console.log(b || c)
 console.log(a || c)
 console.log(a || b || c)
 */

 /* Exercicio 5
 Faça um programa que receba o nome, ano de nascimento de uma pessoa e o ano atual e mostre
 O nome da pessoa
 A idade dessa pessoa
 Um true ou false que diz se ela é maior de idade
 Quantos anos ela terá em 2050 */

 let name = "Leandra"
    let birthYear = 1983
    let currentYear = 2026

    let age = currentYear - birthYear
    let isAdult = age >= 18
    let ageIn2050 = 2050 - birthYear
    
    console.log("Nome:", name)
    console.log("Idade:", age)
    console.log("É maior de idade?", isAdult)
    console.log("Idade em 2050:", ageIn2050)

    




