
function toggleTheme() {
    document.body.classList.toggle("light");
    const text = document.getElementById("themeText");
    text.innerHTML = document.body.classList.contains("light")
        ? "🌙 Modo Escuro"
        : "☀️ Modo Claro";
}

function sortear() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);

    if (isNaN(min) || isNaN(max) || min >= max) {
        alert("Digite valores válidos!");
        return;
    }

    const numero = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementById("resultado").textContent = numero;
}