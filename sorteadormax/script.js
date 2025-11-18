



const sorteador = document.querySelector('button')
const result = document.querySelector('.value-result')



function sortear(){
    const value1 = Math.ceil(document.querySelector('.min').value)
    const value2 = Math.floor(document.querySelector('.max').value)

     // validação simples
    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        alert('Por favor insira números válidos em mínimo e máximo.')
        return
    }
    if (value1 > value2) {
        alert('O valor mínimo não pode ser maior que o máximo.')
        return
    }
    if(value1 <= '-1'){
        alert("digite um valor minimo valido")
        return
    }

     
    result.innerHTML = Math.floor(Math.random() * (value2 - value1 + 1)) + value1
    
}

sorteador.addEventListener("click", sortear)