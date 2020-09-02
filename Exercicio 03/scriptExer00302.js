var verif = document.getElementById("verificar").addEventListener("click", calcularIdade)
var anoNasc = Number(document.getElementById("data").value)
var anoNasc02 = Number(anoNasc.value)
var ano = new Date()
var anoAtual = ano.getFullYear()

function calcularIdade() {
    var y = document.getElementById("txtDetect").textContent
    var calcIdade = anoAtual - document.getElementById("data").value
    var img = document.getElementById("imagem")

if (calcIdade < 18 && document.getElementById("masc").checked) {
    document.getElementById("txtDetect").innerHTML = `Detectamos <b>menino</b> com <b>${calcIdade} anos</b>`
    img.src = "menino.jpg"
    document.body.style.background = "#386CE8"
} else if (calcIdade < 60 && document.getElementById("masc").checked) {
    document.getElementById("txtDetect").innerHTML = `Detectamos <b>homem</b> com <b>${calcIdade} anos</b>`
    img.src = "homem.jpg"
    document.body.style.background = "#2418FF"
} else if (calcIdade >= 60 && document.getElementById("masc").checked) {
    document.getElementById("txtDetect").innerHTML = `Detectamos <b>idoso</b> com <b>${calcIdade} anos</b>`
    img.src = "idoso.jpg"
    document.body.style.background = "#506B96"
} else if (calcIdade < 18 && document.getElementById("fem").checked) {
    document.getElementById("txtDetect").innerHTML = `Detectamos <b>menina</b> com <b>${calcIdade} anos</b>`
    img.src = "menina.jpg"
    document.body.style.background = "#FB8BFE"
} else if (calcIdade < 60 && document.getElementById("fem").checked) {
    document.getElementById("txtDetect").innerHTML = `Detectamos <b>mulher</b> com <b>${calcIdade} anos</b>`
    img.src = "mulher.jpg"
    document.body.style.background = "#E81596"
} else if (calcIdade >= 60 && document.getElementById("fem").checked) {
    document.getElementById("txtDetect").innerHTML = `Detectamos <b>idosa</b> com <b>${calcIdade} anos</b>`
    img.src = "idosa.jpg"
    document.body.style.background = "#FF837A"
} 

}

