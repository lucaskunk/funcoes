//function filtroArray (arrayNumeros) {
//    const primeiroNumero = arrayNumeros[0]
//    const ultimoNumero = arrayNumeros[arrayNumeros.lenght - 1]
//    return [primeiroNumero, ultimoNumero]
//}

//const numeros = [10, 20, 50, 120]
//filtroArray(numeros)

const array = [10, 20, 50, 120]

function filtroArray(array){
    const primeiroNumero = array[0]
    const ultimoNumero = array[array.length - 1]
    return [primeiroNumero, ultimoNumero]
}

console.log(filtroArray(primeiroNumero / 2))
console.log(filtroArray(ultimoNumero / 2))