// function numeros(numero1, numero2){
// soma = numero1 + numero2
// console.log(`A soma entre o número ${numero1} e o número ${numero2} é ${soma}.`)
// }

// numeros(Number(prompt("Digite um número: ")), Number(prompt("Digite outro número: ")))

// =====================================================================================

// function numeros(numero1, numero2) {
    // const maiorIgual = numero1 >= numero2
    // return maiorIgual
// }
// 
// maior = numeros(Number(prompt("Digite um número: ")), Number(prompt("Digite um número: ")))
// console.log(`O primeiro número é maior ou igual ao segundo? ${maior} `)

// =======================================================================================

// function numero(numeroParOuImpar){
    // const restoDivisao = numeroParOuImpar % 2 == 0
    // return restoDivisao
// }

// parOuImpar = numero(Number(prompt("Digite um número: ")))
// console.log(`O número digitado é par? ${parOuImpar}`)
// ======================================================================================

// function mensagem(string){
    // return [string, string.toUpperCase(), string.length]
// }
 
// frase = mensagem(prompt("Digite uma frase: "))
// console.log(`A mensagem digitada foi: ${frase[0]} `)
// console.log(`A mensagem digitada em maiúscula: ${frase[1]} `)
// console.log(`Tamanho da mensagem digitada: ${frase[2]} `)

// ========================================================================================

function funcoesBasicas(numero1, numero2){
    soma = numero1 + numero2
    subtração = numero1 - numero2
    multiplicação = numero1 * numero2
    divisão = numero1 / numero2
    return [numero1, numero2, soma, subtração, multiplicação, divisão]
}

variavel = funcoesBasicas(Number(prompt("Digite um número: ")), Number(prompt("Digite outro número: ")))
console.log(`Os números digitados foram: ${variavel[0]} e ${variavel[1]} `)
console.log(`Soma: ${variavel[2]} `)
console.log(`Diferença: ${variavel[3]} `)
console.log(`Multiplicação: ${variavel[4]} `)
console.log(`Divisão: ${variavel[5]} `)