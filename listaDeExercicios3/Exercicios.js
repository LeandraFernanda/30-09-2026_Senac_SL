/* Exercicio1 
const ask = require(`readline-sync`)

function verifyNumber(num){
if(num % 2 === 0){
console.log("Par")}
}else{
    console.log("Impar")
}
    
------------------------------------------------------
let num = Number(ask.question("Digite seu numero: "))
verifyNumber(num)
let resultado = text.trim().toLowerCase()
trimStart(): Remove espaços apenas do início.trimEnd(): Remove espaços apenas do fi
*/


/* Exercicio 2
Crie uma função verificarMaiorIdade(idade)que recebe a idade da pessoa e informa se é maior de idade(18 anos ou mais) ou menor de idade. Peça a idade ao usuário antes de chamar a função
   conceitos: função, if/else, comparação númerica
   
   
*/

/* Exercicio 3
Crie uma função classificarNota(nota)que recebe uma de 0 a 10 e retorna o conteito:
9 ou 10 -> Excelente
7 ou 8 -> Bom
5 ou 6 -> Regular
Menor que 5 -> Reprovado

conceitos: function, if/else, else encadeado*/

/* Exercicio 4
Crie uma função diaDaSemana(numero) que recebe um numero de 1 a 7 e retorne o nome do dia correspondente(1 = Domingo, 2 = Segunda, etc).Se o numero não estiver entre 1 e 7, a função deverá informar que o valor está inválido

conceitos: função, switch case, case default
*/
/*const ask = require(`readline-sync`)

function diaDaSemana(numero){
    switch(numero){
        case 1:
            console.log("Domingo")
            break
        case 2:
            console.log("Segunda")
            break
        case 3:
            console.log("Terça")
            break
        case 4:
            console.log("Quarta")
            break
        case 5:
            console.log("Quinta")
            break
        case 6:
            console.log("Sexta")
            break
        case 7:
            console.log("Sábado")
            break
        default:
            console.log("Valor inválido")
    }
}
    */

/* Exercicio 5
Crie uma função de uma calculadora simples calculadora(num1, num2,operador) que recebe dois numeros e um operador(+, -,*,/) e retornar o resultado da operação. Peça os dois números e o operador ao usuário separadamente.
conceitos: funções com múltiplas sessões, switch
*/
/*
function calculadora(num1, num2, operador){
    switch(operador){
        case "+":
            console.log(num1 + num2)
            break
        case "-":
            console.log(num1 - num2)
            break
        case "*":
            console.log(num1 * num2)
            break
        case "/":
            console.log(num1 / num2)
            break
        default:
            console.log("Operador inválido")
    }
}
    */

/* Exercicio 6
Crie uma função tipoDeTriangulo(lado1, lado2, lado3)que recebe as medidas de tres lados e informa se o triangulo é:
Equilatero(todos os lados iguais)
Isósceles(dois lados iguais)
Escaleno(todos os lados diferentes)

conceito: função, if/else encadeado com diversas condições
*/
/*
function tipoDeTriangulo(lado1, lado2, lado3){
    if(lado1 === lado2 && lado2 === lado3){
        console.log("Equilatero")
    }else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        console.log("Isósceles")
    }else{
        console.log("Escaleno")
    }
}

*/
/* Exercicio 7
Crie uma função nomeDoMes(numero) que recebe um número de 1 a 12 e retorna o nome do mes correspondente.Caso o número seja invalido, retorne uma mensagem de erro.
conceitos: função, switch case, case default
*/
/*
function nomeDoMes(numero){
    switch(numero){ 
        case 1:
            return "Janeiro"
            break
        case 2:
            return "Fevereiro"
            break
        case 3:
            return "Março"
            break
        case 4:
            return "Abril" 
            break     
        case 5: 
            return "Maio"
            break
        case 6:
            return "Junho"
            break
        case 7:
            return "Julho"
            break
        case 8:
            return "Agosto"
            break
        case 9:
            return "Setembro"
            break
        case 10:
            return "Outubro"    
            break
        case 11:
            return "Novembro"
            break
        case 12:
            return "Dezembro"
            break
        default:
            return "404 ERROR"                            
    };
};
let resultado = text.trim().toLowerCase()
trimStart(): Remove espaços apenas do início.trimEnd(): Remove espaços apenas do final.trim(): Remove espaços do início e do final.
*/

/* Exercicio 8
Crie uma função calcularDesconto(quantidade, precoUnitario)
 que recebe a quantidade de itens comprados e o preço unitário,
  e aplica desconto sobre o valor total:
  10 ou mais itens - 20% de desconto
  5 a 9 itens - 10% de desconto
  Menos de 5 itens - sem desconto
  A função deve retornar o valor total a ser pago após o desconto.
  conceitos: função, if/else encadeado, operadores aritméticos, calculo com base em 
  decisão
*/
/*
const ask = require(`readline-sync`)
function calcularDesconto(quantidade, precoUnitario){
    let valorTotal = quantidade * precoUnitario
    if(quantidade >= 10){
        valorTotal = valorTotal * 0.8
    }else if(quantidade >= 5){
        valorTotal = valorTotal * 0.9
    }
    return valorTotal
}   


*/

/* Exercicio 9
Crie uma função menuPrincipal() que exibe um menu para o usuário escolher entre as opções
Verifique se um número é par ou ímpar
Classificar uma nota
Calcular o IMC
Sair

Dentro dessa função, utilize um switch case para chamar a função correspondente a opção escolhida (reaproveite as funções dos exercícios anterioes!). Se o usuário escolher uma opção invalida, exibira uma mensagem de erro. 
conceitos: função que chama outras função, switch case, reutilização de 
código
*/

/*
const ask = require("readline-sync");

// --- Functions from previous exercises / Helpers ---

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

function classifyGrade(grade) {
  if (grade >= 9 && grade <= 10) {
    return "Excellent";
  } else if (grade >= 7 && grade < 9) {
    return "Good";
  } else if (grade >= 5 && grade < 7) {
    return "Regular";
  } else if (grade >= 0 && grade < 5) {
    return "Failed";
  } else {
    return "Invalid grade";
  }
}

function calculateBMI(weight, height) {
  const bmi = weight / (height * height);
  return bmi.toFixed(2);
}

// --- Main program ---

function main() {
  console.log("=== MENU DE OPÇÕES ===");
  console.log("1. Verificar se número é par ou ímpar");
  console.log("2. Classificar nota");
  console.log("3. Calcular IMC");
  console.log("0. Sair");
  
  const option = ask.question("Escolha uma opção: ");
  
  switch (option) {
    case "1":
      const number = ask.questionInt("Digite um número: ");
      console.log(`O número ${number} é ${checkEvenOrOdd(number)}`);
      break;
      
    case "2":
      const grade = ask.questionFloat("Digite a nota (0-10): ");
      console.log(`Classificação: ${classifyGrade(grade)}`);
      break;
      
    case "3":
      const weight = ask.questionFloat("Digite seu peso (kg): ");
      const height = ask.questionFloat("Digite sua altura (m): ");
      console.log(`Seu IMC é: ${calculateBMI(weight, height)}`);
      break;
      
    case "0":
      console.log("Saindo...");
      return;
      
    default:
      console.log("Opção inválida!");
  }
  
  // Pergunta se quer continuar
  const continueOption = ask.question("\nDeseja continuar? (s/n): ");
  if (continueOption.toLowerCase() === "s") {
    main(); // Chama a função novamente
  } else {
    console.log("Programa encerrado!");
  }
}
*/





