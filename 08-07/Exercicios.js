/* Exercicio 3
Declare 2 variáveis chamaremos de num5 e num6
Compare esses números entre si
       - retorne uma mensagens dizendo se o primeniro número é maior /menor /igual ao segundo número */
/*
       let num5 = 10;
       let num6 = 20;

       if (num5 > num6) {   
           console.log("O primeiro número é maior que o segundo.");
       } else if (num5 < num6) {
           console.log("O segundo número é menor que o segundo.");
       } else {
           console.log("Os números são iguais.");
       }
*/

/* Exercicio 4
declara o codigo pokemom inicial escolhido em switch e imprima no console
Bulbasauro- imprimir planta e veneno
Charmander - imprimir fogo
Squirtle - agua */

//instalar a biblioteca readline-sync para receber dados do usuário no terminal
//npm install readline-sync
/*const ask = require("readline-sync");/*Biblioteca do javascript para receber dados do usuário na pasta*/
/*let pokemom = ask.question("Escolha seu pokemom: ");/*Variável que recebe o valor digitado pelo usuário*/
/*switch(pokemom){
    case 1:
        console.log("planta e veneno");
        break;
    case 2:
        console.log("fogo");
        break;
    case 3:
        console.log("agua");
        break;
    default:
        console.log("Pokemom não encontrado");  

}
*/

/* Exercicio 5
Operadores Logicos e condicionais
uma pessoa pode estudar em uma faculdade se:
Tiver concluido o ensino médio
Tiver 18 anos ou mais
Não estiver cursando outra faculdade

Escrever uma função que receba estas tres variáveis: ensinoMedioConcluido, idade e cursandoOutraFaculdade
com valores booleanos e imprima na tela se esta pessoa pode ou não estudar na faculdade
*/
const readline = require('readline-sync');  
function podeEstudar(ensinoMedioConcluido, idade, cursandoOutraFaculdade) {
    if (ensinoMedioConcluido && idade >= 18 && !cursandoOutraFaculdade) {
        console.log("A pessoa pode estudar na faculdade.");
    } else {
        console.log("A pessoa não pode estudar na faculdade.");
    }
}
podeEstudar(ensinoMedioConcluido,idade,cursandoOutraFaculdade);
podeEstudar(true, 20, false); // Exemplo de chamada da função com valores booleanos 
podeEstudar(false, 17, true); // Exemplo de chamada da função com valores booleanos
podeEstudar(true, 19, true); // Exemplo de chamada da função com valores booleanos
podeEstudar(true, 18, false); // Exemplo de chamada da função com valores booleanos



 

       







































































       