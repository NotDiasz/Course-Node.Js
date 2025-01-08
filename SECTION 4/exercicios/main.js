function ehPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true; // Se passar por todas as verificações, é primo
}

function encontrarPrimos(limite) {
    const primos = [];
    for (let i = 0; i <= limite; i++) {
        if (ehPrimo(i)) {
            primos.push(i); // Adiciona o número primo à lista
        }
    }
    return primos;
}

// Encontrar números primos de 0 a 200
const primosAte200 = encontrarPrimos(200);
console.log("Números primos de 0 a 200:", primosAte200);
