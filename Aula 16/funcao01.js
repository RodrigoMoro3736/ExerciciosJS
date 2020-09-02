function parimp(n) {
    if (n%2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}

var res = parimp(11)

console.log(`O numero que vc digitou é ${res}`)
