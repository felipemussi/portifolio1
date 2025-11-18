const convertButton = document.querySelector(".convert-button")

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
const textSelectedConverted = document.querySelector("#selectConvertido")
textSelectedConverted.addEventListener('change', function (event) {
    const valuesSelectConverted = textSelectedConverted.options[textSelectedConverted.selectedIndex].value 
    if (valuesSelectConverted === "real") {
        // Alterando a imagem e o texto para Real
        const srcValuesConverted = document.querySelector
        ("#logoMoedaConvertida").src = "./assets/img/icon-brasil.png"
        const textConverted = document.querySelector
        (".moeda-convertida").innerText = "Real"
        // Formatando o valor para Real
        const textValueConverted = document.querySelector
            (".valor-convertido").innerText = new Intl.NumberFormat
                ('pt-BR', { style: 'currency', currency: 'BRL' }).format(valuesConverted)
    // Alterando a imagem e o texto para Dólar
            } else if (valuesSelectConverted === "dolar") {
        // Alterando a imagem e o texto para Dólar
                const srcValuesConverted = document.querySelector
        ("#logoMoedaConvertida").src = "./assets/img/icon-usa.png"
        const textConverted = document.querySelector
        (".moeda-convertida").innerText = "Dólar Americano"
        // Formatando o valor para Dólar        
        const textValueConverted = document.querySelector
            (".valor-convertido").innerText = new Intl.NumberFormat
                ('en-US', { style: 'currency', currency: 'USD' }).format(valuesConverted)
    // Alterando a imagem e o texto para Euro
            } else if (valuesSelectConverted === "euro") {
            const srcValuesConverted = document.querySelector
        ("#logoMoedaConvertida").src = "./assets/img/icon-euro.png"
        // Formatando o valor para Euro
        const textConverted = document.querySelector
        (".moeda-convertida").innerText = "Euro"
                const textValueConverted = document.querySelector
            (".valor-convertido").innerText = new Intl.NumberFormat
                ('de-DE', { style: 'currency', currency: 'EUR' }).format(valuesConverted)
    }
})
// Função de converter valores
