/* var num = [5, 8, 9, 3]
num[4] = 6
num.push(7)
console.log(`O vetor tem ${num.length} posições`)
*/

var valores = [8, 1, 7, 4, 2, 9]
/*
for (var v = 0; v < valores.length; v++){
    console.log(`A posição ${v} tem o valor: ${valores[v]}`)
}
*/
// valores.sort()
for (var v in valores) {
    console.log(`A posição ${v} tem o valor: ${valores[v]}`)
}
console.log("------------")
console.log(valores.indexOf(7))
console.log(valores.indexOf(3))