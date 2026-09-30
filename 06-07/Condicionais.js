/* CONDICIONAIS EM JAVASCRIPT

-> Condicionais são estruturas de controle que permitem executar diferentes blocos de código com base em condições específicas. Em JavaScript, as principais estruturas condicionais são:

1. if: Executa um bloco de código se a condição for verdadeira.
2. else: Executa um bloco de código se a condição do if for falsa.
3. else if: Permite testar múltiplas condições.
4. switch: Permite testar uma variável contra diferentes valores.

Exemplo de uso: Se chover, você pode usar um guarda-chuva; caso contrário, você pode usar óculos de sol.
No javascript fazemos isso usando: 
- if
-else
-else if
-switch
Exemplo de código:
if (chover) {
    console.log("Use um guarda-chuva");
} else {
    console.log("Use óculos de sol");
}
Condicionais servem para tomar decisoes no código
Exemplo:
"Se chover, leve um guarda-chuva"
"Caso contrário, saia normalmente"

No javascript fazemos isso usando:
if
else
else if
switch

if o if significa "se" acondição entre parenteses deve resultar em:
true verdsadeiro
false falso
Se for true, o código dentro das chaves será executado.

*/ 
//Exemplo de código:
/*let condicao1 = false
if (condicao1) {
    console.log("A condição é verdadeira");
} else {
    console.log("A condição é falsa");
}
    */

//Exemplo 2 
/*let idade = 43
if (idade < 18) {
    console.log("Você é maior de idade");
}
else if (idade >= 18 && idade < 65) {
    console.log("Você é adulto");
}
    */

/* Else significa caso contrário Ele executa quando o if é falso */
let temperatura = 26
if(temperatura > 25){
    console.log("Está agradavel!")
} else {
    console.log("Está frio!")
}