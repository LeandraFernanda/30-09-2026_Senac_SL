/* fazer com que quando eu aperte a tecla "a" ele mude a foto para outra foto */
/*document.addEventListener('keydown', function(event) {
    if (event.key === 'A' || `${event.key === 'a'}`) {
        const image = document.getElementById('myImage');
        image.src = 'outra_foto.jpg'; // Substitua pelo caminho da nova foto
    }
});*/
/* Fazer com que quando eu apertar o botao, ele mude a foto para outra foto */

// 1. Seleciona o botão e a imagem
const botao = document.querySelector('button'); // ou getElementById/querySelector com o id/classe
const imagem = document.querySelector('img');

// 2. Adiciona o evento de clique no botão
botao.addEventListener('click', () => {
  // 3. Altera o caminho da imagem para a nova URL ou arquivo local
  imagem.src = 'careca.jpg'; // Substitua pelo caminho da nova foto
});