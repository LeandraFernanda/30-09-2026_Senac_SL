// 1. Seleciona o elemento da imagem pelo ID
const imagem = document.querySelector("#imagem");

// 2. Mostra o src e alt atual no console usando getAttribute()
console.log("SRC Inicial:", imagem.getAttribute("src"));
console.log("ALT Inicial:", imagem.getAttribute("alt"));

// 3. Altere o src e o alt usando setAttribute()
imagem.setAttribute("src", "leao.jpg");
imagem.setAttribute("alt", "Imagem de um leão");

// 4. Mostra os novos valores no console para confirmar a alteração
console.log("Novo SRC:", imagem.getAttribute("src"));
console.log("Novo ALT:", imagem.getAttribute("alt"));
