const numeros = [10 , 2 , -4 , -5 , 4 , 8 , -19 , 26 , -11 , -15]

let total = 0
numeros.forEach(element => {
    if (element < 0) {
       total = total+1
       console.log('negativo : ' , element)
    }
});

console.log('Total de numeros negativos : ' , total)
