// Seleciona os elementos do HTML
const imagem = document.querySelector("#imagem");
const botao = document.querySelector("#botao");

// Adiciona o evento de clique no botão
botao.addEventListener("click", function() {
    
    // Verifica qual é a imagem atual usando o método .getAttribute()
    if (imagem.getAttribute("src") === "gato.jpg") {
        // Altera para a nova imagem e muda o texto alternativo
        imagem.setAttribute("src", "cachorro.jpg");
        imagem.setAttribute("alt", "Cachorro");
    }
    else {
        // Altera de volta para a imagem original e muda o texto alternativo
        imagem.setAttribute("src", "gato.jpg");
        imagem.setAttribute("alt", "Gato");
    }
});
