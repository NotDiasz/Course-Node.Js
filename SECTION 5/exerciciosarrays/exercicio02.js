const vetor = [];

for (let i = 0; i < 15; i++) {
    const numeroAleatorio = Math.floor(Math.random() * 100); // Número aleatório entre 0 e 99
    vetor.push(numeroAleatorio);
}

console.log("Vetor preenchido com números aleatórios:", vetor);
