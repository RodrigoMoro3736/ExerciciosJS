numero = document.getElementById("numero")
numSel = document.getElementById("numSel")
item = document.createElement("option")
item.text = "Adicione um número acima"
numSel.appendChild(item)
var pTexto = document.getElementById("pTexto")
numFinal = []
achar = numFinal.find()

function fnc01() {
    while (item.text == "Adicione um número acima") {
        item.innerHTML = ""
    }
    
    
    
    if (numero.value == "") {
        alert("Digite um numero!")
        item.innerHTML = "Adicione um número acima"
    } else if (numero.value < 1 || numero.value > 100) {
        alert("Digite um numero entre 1 e 100")
        item.innerHTML = "Adicione um número acima"
    } else {
        numFinal.push(numero.value)
        item = document.createElement("option")
        numSel.appendChild(item)
        item.innerHTML += `Valor ${numero.value} Adicionado!`
    }
   
    
}




function fnc02() {
    pTexto.innerHTML = ""
    numFinal.sort()
    reducer = (accumulator, currentValue) => accumulator + currentValue;
    soma = numFinal.reduce(reducer)

    pTexto.innerHTML += `<p>Ao todo temo ${numFinal.length} números cadastrados</p>`
    pTexto.innerHTML += `<p>O maior valor informado foi ${numFinal[numFinal.length - 1]}</p>`
    pTexto.innerHTML += `<p>O menor valor informado foi ${numFinal[0]}</p>`
    pTexto.innerHTML += `<p>Somando todos valores temos ${soma}</p>`
    pTexto.innerHTML += `<p>A media dos valores digitados é ${soma / numFinal.length}</p>`
    

   
}
