const niveis = [
    ['A', 'B', 'C', 'D'],
    [1, 2, 3, 4],
    ['🐶', '🐱', '🐭', '🐰']
    // Adicione mais conjuntos conforme necessário
];

let nivelAtual = 0;
let cartaVirada = null;
let paresEncontrados = [];

function criarCartas(nivel) {
    const gameBoard = document.getElementById('game-board');
    const currentLevelDisplay = document.getElementById('current-level');
    currentLevelDisplay.textContent = nivelAtual + 1;

    const shuffledLetters = niveis[nivel].concat(niveis[nivel]).sort(() => Math.random() - 0.5);

    shuffledLetters.forEach(letra => {
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        cardContainer.addEventListener('click', virarCarta);

        const cardFront = document.createElement('div');
        cardFront.classList.add('card', 'card-front');
        cardFront.textContent = letra;

        const cardBack = document.createElement('div');
        cardBack.classList.add('card', 'card-back');

        cardContainer.appendChild(cardFront);
        cardContainer.appendChild(cardBack);
        gameBoard.appendChild(cardContainer);
    });
}

function virarCarta() {
    const cardContainer = this;
    const isFlipped = cardContainer.classList.contains('flipped');

    if (isFlipped || paresEncontrados.includes(cardContainer)) {
        return;
    }

    cardContainer.classList.add('flipped');

    if (!cartaVirada) {
        cartaVirada = cardContainer;
    } else {
        if (cardContainer === cartaVirada) {
            return;
        }
        if (cardContainer.querySelector('.card-front').textContent === cartaVirada.querySelector('.card-front').textContent) {
            paresEncontrados.push(cardContainer, cartaVirada);
            cartaVirada = null;
        } else {
            setTimeout(() => {
                cardContainer.classList.remove('flipped');
                cartaVirada.classList.remove('flipped');
                cartaVirada = null;
            }, 500);
        }
    }
}

function proximoNivel() {
    nivelAtual++;
    if (nivelAtual < niveis.length) {
        reiniciarJogo();
    } else {
        alert('Parabéns! Você completou todos os níveis.');
        nivelAtual = 0; // Reinicia para o primeiro nível após completar todos os níveis
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    cartaVirada = null;
    paresEncontrados = [];
    document.getElementById('game-board').innerHTML = '';
    criarCartas(nivelAtual);
}

window.onload = function() {
    criarCartas(nivelAtual);
};
function alterarJogo() {
    const memoryGameContainer = document.getElementById('memory-game-container');
    const guessingGameContainer = document.getElementById('guessing-game-container');

    memoryGameContainer.style.display = 'block';
    guessingGameContainer.style.display = 'none';

    reiniciarJogo(); // Adicionando reinicialização ao voltar para o Jogo da Memória
}
