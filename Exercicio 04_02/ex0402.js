var botao = document.getElementById("botao").addEventListener("click", calcular)

function calcular() {
    var numero = Number(document.getElementById("numero").value)
    var txt = document.getElementById("txt")
    txt.innerHTML = ""
    
    if (numero == "") {
        alert("Erro! Por favor digite um numero.")
        txt.innerHTML = "Digite um numero acima!"
    } else {
    for (i = 1; i <= 10; i++) {
        txt.innerHTML += `${numero} * ${i} = ${i * numero}\n`
    }
    } 
}