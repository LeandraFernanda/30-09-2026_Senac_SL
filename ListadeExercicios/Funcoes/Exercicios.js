/* Exercicio 1
 function imprimirOlaMundo(){
 console.log("Olá, Mundo!")}*/

 /* Exercicio 2
 Crie uma função que receba por parametro um nome e imprima no console a mensagem:
    `Olá ${nome}!`
    Invoque esta função passando 3 argumentos
 */


    /* Exercicio 2
    const ask = require(`readline-sync`);
    
    const printName(name){
    console.log(`Olá ${name}!`)}
    */

    
    /* Exercicio 3
    Crie uma função que receba dois números e retorne a soma entre eles.
    Guarde o retorno de ssa funçao em uma variável e imprima no console*/

    const ask = require(`readline-sync`);

    funtion sum(num1, num2){
    return num1 + num2
    }

    let number1 = Number(ask.question("Digite o primeiro numero: "))
    let number2 = Number(ask.question("Digite o segundo numero: "))

    let result = sum(number1, number2)
    console.log(result)

    /* Exercicio 4
    Crie uma fução que:
    Receba um array de números
    Retorne um novo array  com dois elementos
         o ultimo e o primeiro número do array recebido divididos por 2 
         */

         const ask = require(`readline-sync`);

         function divideFirstAndLast(arr){
         let first = arr[0] / 2
         let last = arr[arr.length - 1] / 2
         return [first, last]
         }

         let arrayNumbers = []
         for(let i = 0; i < 5; i++){
             let number = Number(ask.question("Digite um numero: "))
             arrayNumbers.push(number)
         }

         let resultArray = divideFirstAndLast(arrayNumbers)
         console.log(resultArray)   

         /* Exercicio 5
         FAça uma função que receba dois parametros. Um chamado idade, que deve receber um número, e outro chamado habilitação, que deve receber um booleano. Retorne um outroboleano, informando se a esta pessoa pode ou não dirigir.
         */
        const ask = require(`readline-sync`);

        function canDrive(age, hasLicense){
        return age >= 18 && hasLicense
        };

        let age = Number(ask.question("Digite sua idade: "));
        let hasLicense = ask.question("Você possui habilitação? (s/n): ").toLowerCase() === 's'

        let canDriveResult = canDrive(age, hasLicense)
        console.log(`Pode dirigir: ${canDriveResult}`) ;
        
        