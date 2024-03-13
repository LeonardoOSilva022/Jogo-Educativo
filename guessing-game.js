let objetosBaseDados = [
    { nome: 'Flor', dica: 'Tem pétalas coloridas e cheira muito bem.' },
    { nome: 'Arvore', dica: 'É muito alta e pode ter muitas folhas.' },
    { nome: 'Maça', dica: 'É uma fruta vermelha e suculenta.' },
    { nome: 'Sol', dica: 'É uma grande bola de fogo no céu que nos dá luz e calor.' },
    { nome: 'Peixe', dica: 'Vive na água, nada com suas barbatanas e tem escamas.' },
    { nome: 'Girafa', dica: 'Animal com pescoço muito longo.' },
    { nome: 'Aviao', dica: 'Meio de transporte que voa pelo céu.' },
    { nome: 'Bola', dica: 'Objeto redondo usado para brincar.' },
    { nome: 'Arco iris', dica: 'É formado por cores no céu depois da chuva.' },
    { nome: 'Estrela', dica: 'Pontinho brilhante no céu durante a noite.' },
];

let indiceAtual = 0;

function exibirDicaAtual() {
    const dicaAtual = objetosBaseDados[indiceAtual].dica;
    const dicaElemento = document.getElementById('guessing-game-hint');
    dicaElemento.textContent = `Dica: ${dicaAtual}`;
}

function verificarResposta() {
    const respostaInput = document.getElementById('guess-input').value.toLowerCase();
    const respostaCorreta = objetosBaseDados[indiceAtual].nome.toLowerCase();

    if (respostaInput === respostaCorreta) {
        document.getElementById('guess-feedback').textContent = 'Parabéns! Você acertou!';
    } else {
        document.getElementById('guess-feedback').textContent = 'Ops! Tente novamente.';
    }
}

function proximaDica() {
    indiceAtual++;
    if (indiceAtual < objetosBaseDados.length) {
        exibirDicaAtual();
        document.getElementById('guess-feedback').textContent = '';
        document.getElementById('guess-input').value = '';
    } else {
        alert('Parabéns! Você completou todas as dicas.');
        reiniciarJogoAdivinhacao();
    }
}

function reiniciarJogoAdivinhacao() {
    indiceAtual = 0;
    exibirDicaAtual();
    document.getElementById('guess-feedback').textContent = '';
    document.getElementById('guess-input').value = '';
}

window.onload = function() {
    exibirDicaAtual();
};
