var numSel = document.getElementById("numSel")
var item02 = document.createElement("option")
item02.text = `Digite um numero acima!`
numSel.appendChild(item02)
var numero = document.getElementById("numero")



function fnc01() {
    item02.innerHTML = ""
    var numero01 = numero
    var array01 = []
    var item = document.createElement("option")
    item.innerHTML = ""
    numSel.appendChild(item)
    array01.push(numero01.value)

    while (item.text == `Digite um numero acima!`) {
        item.innerHTML = ""
    }
    
    if (Number(numero01.value) == "") {
        alert("Digite um numero!")
        //item.innerHTML = `Digite um numero acima!`
    } else if ((Number(numero01.value)) < 1 || Number(numero01.value) > 100) {
        alert("Digite um número entre 1 e 100 ")
        //item.innerHTML = `Digite um numero acima!`
    } else if (Number(numero01.value) >= 1 && Number(numero01.value <=100)){
        item.innerHTML += (`Valor ${Number(numero01.value)} Adicionado!\n`)
        
    }


}

function fnc02() {
    alert(fnc01.array01)
}