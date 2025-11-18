const convertButton = document.querySelector("#btnConverter")

// Alterando o texto e a imagem conforme a 
// moeda selecionada no select a converter
const inputValues = document.querySelector(".input-values").value

    // Taxa de conversão fixa dolar para exemplo
    const dolarToDay = 5.25
    const euroToDay = 5.90
    const realToDay = 1

    // Convertendo o valor
   


// Alterando o texto e a imagem conforme a 
// moeda selecionada no select a converter


convertButton.addEventListener('click', function (event) {
    const valuesSelect = textSelectedToConvert.options[textSelectedToConvert.selectedIndex].value
    const valuesSelectConverted = textSelectedConverted.options[textSelectedConverted.selectedIndex].value
    if (valuesSelect === "real" && valuesSelectConverted === "dolar") {
        const valuesConverted = inputValues / dolarToDay
    }
    if (valuesSelect === "real" && valuesSelectConverted === "euro") {
        const valuesConverted = inputValues / euroToDay        
    }
    if (valuesSelect === "dolar" && valuesSelectConverted === "real") {
        const valuesConverted = inputValues * dolarToDay        
    }
    if (valuesSelect === "dolar" && valuesSelectConverted === "euro") {
        const valuesConverted = (inputValues * dolarToDay) / euroToDay        
    }
    if (valuesSelect === "euro" && valuesSelectConverted === "real") {
        const valuesConverted = inputValues * euroToDay        
    }
    if (valuesSelect === "euro" && valuesSelectConverted === "dolar") {
        const valuesConverted = (inputValues * euroToDay) / dolarToDay        
    }
})

const textSelectedToConvert = document.querySelector("#selectAconverter")
textSelectedToConvert.addEventListener('change', function (event) {
    const valuesSelect = textSelectedToConvert.options[textSelectedToConvert.selectedIndex].value // 'this' se refere ao select
    if (valuesSelect === "real") {
        // Alterando a imagem e o texto para Real
        const srcValuesToConvert = document.querySelector
        ("#logoMoedaAconverter").src = "./assets/img/icon-brasil.png"
        const textToConvert = document.querySelector
        (".moedaAconverter").innerText = "Real"
        // Formatando o valor para Real
        const textValueToConvert = document.querySelector
            (".valor-a-converter").innerText = new Intl.NumberFormat
                ('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputValues)
        
                // Alterando a imagem e o texto para Dólar
    } else if (valuesSelect === "dolar") {
        // Alterando a imagem e o texto para Dólar
        
        const srcValuesToConvert = document.querySelector
        ("#logoMoedaAconverter").src = "./assets/img/icon-usa.png"
        const textToConvert = document.querySelector
        (".moedaAconverter").innerText = "Dólar Americano"
        
        // Formatando o valor para Dólar
        const textValueToConvert = document.querySelector
            (".valor-a-converter").innerText = new Intl.NumberFormat
                ('en-US', { style: 'currency', currency: 'USD' }).format(inputValues)
    // Alterando a imagem e o texto para Euro
            } else if (valuesSelect === "euro") {
        // Alterando a imagem e o texto para Euro
                const srcValuesToConvert = document.querySelector
        ("#logoMoedaAconverter").src = "./assets/img/icon-euro.png"
        const textToConvert = document.querySelector
        (".moedaAconverter").innerText = "Euro"
        // Formatando o valor para Euro
        const textValueToConvert = document.querySelector
            (".valor-a-converter").innerText = new Intl.NumberFormat
                ('de-DE', { style: 'currency', currency: 'EUR' }).format(inputValues)
    }
})
    // Alterando o texto e a imagem conforme a 
    // moeda selecionada no select convertido
// Versão corrigida e organizada do conversor
document.addEventListener('DOMContentLoaded', () => {
  const convertButton = document.querySelector('.convert-button');
  const inputEl = document.querySelector('.input-values');
  const selectFrom = document.querySelector('#selectAconverter');
  const selectTo = document.querySelector('#selectConvertido');
  const textFrom = document.querySelector('.moedaAconverter');
  const textTo = document.querySelector('.moeda-convertida');
  const valueFromEl = document.querySelector('.valor-a-converter');
  const valueToEl = document.querySelector('.valor-convertido');
  const logoFrom = document.getElementById('logoMoedaAconverter');
  const logoTo = document.getElementById('logoMoedaConvertida');
    // Taxa de conversão fixa
  const rates = { real: 1, dolar: 5.25, euro: 5.9 };
// Função para formatar valores monetários
  function formatCurrency(amount, code) {
    if (code === 'BRL') return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
    if (code === 'USD') return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
    if (code === 'EUR') return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(amount);
    return amount;
  }
// Função para obter o código da moeda
  function codeOf(value) {
    return value === 'real' ? 'BRL' : value === 'dolar' ? 'USD' : value === 'euro' ? 'EUR' : null;
  }
// Atualiza exibição da moeda de origem
  function updateFromDisplay() {
    if (!selectFrom) return;
    const from = selectFrom.value;
    if (textFrom) textFrom.textContent = from === 'real' ? 'Real' : from === 'dolar' ? 'Dólar Americano' : 'Euro';
    if (valueFromEl && inputEl) valueFromEl.textContent = formatCurrency(Number(inputEl.value || 0), codeOf(from));
    updateLogo(logoFrom, from);
  }
// Atualiza logo da moeda
  function updateLogo(img, value) {
    if (!img) return;
    if (value === 'real') img.src = './assets/img/icon-brasil.png';
    else if (value === 'dolar') img.src = './assets/img/icon-usa.png';
    else if (value === 'euro') img.src = './assets/img/icon-euro.png';
    else img.removeAttribute('src');
  }
// Função de converter valores
  function convert() {
    if (!selectFrom || !selectTo || !inputEl) return;
    const from = selectFrom.value;
    const to = selectTo.value;
    const amount = Number(inputEl.value || 0);

    // converte para real como base e depois para destino
    const inReais = amount * (rates[from] || 1);
    const converted = inReais / (rates[to] || 1);
// Atualiza exibição
    if (valueToEl) valueToEl.textContent = formatCurrency(converted, codeOf(to));
    if (textTo) textTo.textContent = to === 'real' ? 'Real' : to === 'dolar' ? 'Dólar Americano' : 'Euro';
    updateLogo(logoTo, to);
  }

  // inicial
  updateFromDisplay();
  convert();

  // listeners
  if (selectFrom) selectFrom.addEventListener('change', () => { updateFromDisplay(); convert(); });
  if (selectTo) selectTo.addEventListener('change', () => convert());
  if (inputEl) inputEl.addEventListener('input', () => { updateFromDisplay(); convert(); });
  if (convertButton) convertButton.addEventListener('click', () => convert());
});
