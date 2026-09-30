// 1. Seleciona o elemento que vai exibir o texto
const mensagem = document.querySelector("#mensagem");

// 2. Seleciona cada um dos botões individualmente
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// 3. Adiciona os escutadores de eventos para cada botão
btn1.addEventListener("click", function() {
    mensagem.textContent = "Olá, usuário!";
});

btn2.addEventListener("click", function() {
    mensagem.textContent = "Até mais!";
});

btn3.addEventListener("click", function() {
    mensagem.textContent = "Estou aprendendo JavaScript!";
});
