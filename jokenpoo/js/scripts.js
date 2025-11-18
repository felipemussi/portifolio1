let suaPontuacao = 0;
let alexaPontuacao = 0;
let contadorRodadas = 0;
let empates = 0;
let escolhaAlexa = '';


const arrayEscolha = ['pedra', 'papel', 'tesoura'];

const contadorRodadasFinal = (contadorRodadas) => {
    document.querySelector('.contadorJogos').textContent = 'Jogaram: ' + contadorRodadas;
}

const ganhador = (suaEscolha) => {
    //suas vitoria 
    if (suaEscolha === 'pedra' && escolhaAlexa === 'tesoura' ||
        suaEscolha === 'papel' && escolhaAlexa === 'pedra' ||
        suaEscolha === 'tesoura' && escolhaAlexa === 'papel') {
        suaPontuacao++;
        const visorPontuacao = document.querySelector('.suaPontuacao')
        visorPontuacao.textContent = 'Sua pontuação: ' + suaPontuacao;
        contadorRodadasFinal(++contadorRodadas)
    mostrarMensagem(`🎉 Parabéns! Você venceu! 🎉 ${suaEscolha} ganha de ${escolhaAlexa}`, 'vitoria');
        return
    } else if (suaEscolha === escolhaAlexa) {
        document.querySelector('.contadorEmpates').textContent = 'Empates: ' + ++empates;
        contadorRodadasFinal(++contadorRodadas)
        mostrarMensagem('Deu empate, os dois escolheram: ' + suaEscolha, 'empate');
        return
    } else {
        alexaPontuacao++;
        const visorPontuacao = document.querySelector('.pontuacaoAlexa')
        visorPontuacao.textContent = 'Alexa Pontuação: ' + alexaPontuacao;
        contadorRodadasFinal(++contadorRodadas)
    mostrarMensagem(`💀 Você perdeu! 💀 ${escolhaAlexa} ganha de ${suaEscolha}`, 'derrota');
        return

    }
}

function mostrarMensagem(texto, tipo) {
    const mensagem = document.getElementById('mensagem');
    if (mensagem) {
        mensagem.textContent = texto;
        mensagem.className = tipo;
    }
}

const checarGanhador = (suaEscolha) => {
    escolhaAlexa = arrayEscolha[Math.floor(Math.random() * arrayEscolha.length)];
    ganhador(suaEscolha);
}