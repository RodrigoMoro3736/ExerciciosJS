var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours() + "h" + agora.getUTCMinutes() + "m"


switch (diaSem) {
    case 0:
        console.log(`Hojé é Domingo, e são exatamente ${hora}`)
        break
    case 1:
        console.log(`Hojé é Segunda, e são exatamente ${hora}`)
        break
    case 2:
        console.log(`Hojé é Terça, e são exatamente ${hora}`)
        break
    case 3:
        console.log(`Hojé é Quarta, e são exatamente ${hora}`)
        break
    case 4:
        console.log(`Hojé é Quinta, e são exatamente ${hora}`)
        break
    case 5:
        console.log(`Hojé é Sexta, e são exatamente ${hora}`)
        break
    case 6:
        console.log(`Hojé é Sábado, e são exatamente ${hora}`)
        break
    default:
        console.log("ERRO. Dia inválido!")
        break
}



