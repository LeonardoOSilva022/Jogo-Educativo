function alterarJogo() {
    const memoryGameContainer = document.getElementById('memory-game-container');
    const guessingGameContainer = document.getElementById('guessing-game-container');

    if (memoryGameContainer.style.display === 'none') {
        memoryGameContainer.style.display = 'block';
        guessingGameContainer.style.display = 'none';
        reiniciarJogo();
    } else {
        memoryGameContainer.style.display = 'none';
        guessingGameContainer.style.display = 'block';
        reiniciarJogoAdivinhacao();
    }
}
