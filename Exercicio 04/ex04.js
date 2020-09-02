var contar = document.getElementById("contar").addEventListener("click", contador)

function contador() {

var inicio = Number(document.getElementById("inicio").value)
var fim = Number(document.getElementById("fim").value)
var passo = Number(document.getElementById("passo").value)
var emoji = "&#128073"
var emojiBandeira = "&#127937"
var div02 = document.getElementById("div02")

div02.innerHTML = ""

if (inicio == "" || fim == "") {
    div02.innerHTML = "Impossivel contar!"
} else if (passo == 0 && inicio < fim) {
    alert("Impossivel contar com Passo 0, assumindo Passo 1 automaticamente!")
    for (fim > inicio; fim >= inicio; inicio += passo){
        passo = 1
        div02.innerHTML += `${inicio} ${emoji} ` 
    }
    div02.insertAdjacentHTML('beforeend', emojiBandeira)
}
    else if (passo == 0 && inicio > fim){
        alert("Impossivel contar com Passo 0, assumindo Passo 1 automaticamente!")
        for (inicio > fim; fim <= inicio; inicio = inicio - passo){
            passo = 1
            div02.innerHTML += `${inicio} ${emoji} ` 
        }
        div02.insertAdjacentHTML('beforeend', emojiBandeira)
    } else if (fim > inicio) {
for (inicio > 0; fim >= inicio; inicio += passo) {
    div02.innerHTML += `${inicio} ${emoji} ` 
}
div02.insertAdjacentHTML('beforeend', emojiBandeira)
} else {
for (inicio > fim; fim <= inicio; inicio = inicio - passo) {
    div02.innerHTML += `${inicio} ${emoji} ` 
}
div02.insertAdjacentHTML('beforeend', emojiBandeira)
}
}

