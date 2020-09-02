function carregar() {
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var horaMin = hora + "h" + min + "m"
// msg.innerHTML = `Agora são ${horaMin}`

if (hora > 0 && hora < 12) {
    // manhã
    img.src = "manha.jpg"
    msg.innerHTML = `Agora são ${horaMin} <br> Bom dia!`
    document.body.style.background = "#EEE8AA"
} else if (hora >= 12 && hora <= 18) {
    // tarde
    img.src = "tarde.jpg"
    msg.innerHTML = `Agora são ${horaMin} <br> Boa tarde!`
    document.body.style.background = "#DEB887"
} else {
    // noite
    img.src = "noite.jpg"
    msg.innerHTML = `Agora são ${horaMin} <br> Boa noite!`
    document.body.style.background = "#B0E0E6"
}

}

