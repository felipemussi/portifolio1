let numeroTentativas = 7;
let contadorTentativas = 0;
let palavraSelecionada = '';
let exibicaoPalavra = [];
let letrasUsadas = [];

const palavras = ["Acender", "Afilhado", "Ardiloso", "Áspero", 
    'Pororoca', 'Quarentena'];

const chutarLetra = () => {
    const input = document.getElementById('letra-escolhida');
    const letra = input.value.toLowerCase();
    
    if (letra === '' || letrasUsadas.includes(letra)) {
        alert('Letra já utilizada ou inválida!');
        input.value = '';
        return;
    }

    letrasUsadas.push(letra);
    validarLetras(letra);
    input.value = '';
}

function atualizarDisplay() {
    const displayPalavra = document.getElementById('palavra');
    if (displayPalavra) {
        displayPalavra.textContent = exibicaoPalavra.join(' ');
    }

    const tentativas = document.getElementById('tentativas');
    if (tentativas) {
        tentativas.textContent = `Tentativas restantes: ${numeroTentativas - contadorTentativas}`;
    }

    const letrasUsadasElement = document.getElementById('letras-usadas');
    if (letrasUsadasElement) {
        letrasUsadasElement.textContent = `Letras usadas: ${letrasUsadas.join(', ')}`;
    }
}

function atualizarImagem() {
    const imgForca = document.getElementById('forca-img');
    if (imgForca) {
        imgForca.src = `./assets/forca${contadorTentativas}.png`;
    }
}

function mostrarMensagem(texto, tipo) {
    const mensagem = document.getElementById('mensagem');
    if (mensagem) {
        mensagem.textContent = texto;
        mensagem.className = tipo;
    }
}

function validarLetras(letraEscolhida) {
    let acertou = false;
    const palavraMinuscula = palavraSelecionada.toLowerCase();
    
    for (let i = 0; i < palavraSelecionada.length; i++) {
        if (palavraMinuscula[i] === letraEscolhida) {
            exibicaoPalavra[i] = palavraSelecionada[i];
            acertou = true;
        }
    }

    if (!acertou) {
        contadorTentativas++;
        atualizarImagem();
        }

    atualizarDisplay();

    // Verifica vitória
    if (!exibicaoPalavra.includes('_')) {
        mostrarMensagem('🎉 Parabéns! Você venceu! 🎉', 'vitoria');
        document.getElementById('btn-reiniciar-jogo').style.display = 'block';
        document.getElementById('btn-chutar-letra').disabled = true;
        document.getElementById('letra-escolhida').disabled = true;
        return;
    }

    // Verifica derrota
    if (contadorTentativas >= numeroTentativas) {
        mostrarMensagem(`💀 Game Over! A palavra era: ${palavraSelecionada} 💀`, 'derrota');
        document.getElementById('btn-reiniciar-jogo').style.display = 'flex';
        document.getElementById('btn-chutar-letra').disabled = true;
        document.getElementById('letra-escolhida').disabled = true;
        return;
    }
}

const iniciarJogo = () => {
    contadorTentativas = 0;
    letrasUsadas = [];
    palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)];
    exibicaoPalavra = Array(palavraSelecionada.length).fill('_');
    
    // Resetar interface
    document.getElementById('btn-reiniciar-jogo').style.display = 'none';
    document.getElementById('btn-chutar-letra').disabled = false;
    document.getElementById('letra-escolhida').disabled = false;
    document.getElementById('letra-escolhida').value = '';
    mostrarMensagem('', '');
    
    atualizarDisplay();
    atualizarImagem();
}

iniciarJogo();