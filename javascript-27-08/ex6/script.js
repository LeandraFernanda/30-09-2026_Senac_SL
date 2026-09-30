// 1. SELECIONAR ELEMENTOS
const mensagem = document.querySelector("#mensagem");
const botao = document.querySelector("#botao");

// 2. ESCUTAR EVENTO
// O método addEventListener fica monitorando o "click" no botão
botao.addEventListener("click", executarAcao);

// 3. EXECUTAR FUNÇÃO
function executarAcao() {
    // 4. ALTERAR ELEMENTO
    mensagem.textContent = "Você clicou no botão!";
}
