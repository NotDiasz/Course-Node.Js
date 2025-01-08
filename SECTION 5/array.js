const num = [1 , 2 , 2 ]
console.log(num)

num.push(10) // adiciona a ultima posiçao do array
console.log(num)
console.log(num[2])

num.pop() // remove o ultimo
num.shift() // remove o primeiro
console.log(num)

//unshift adiciona a frente um numero exemplo
// num.unshift(10)

// a slice faz o seguinte de uma casa ate outra puxa do indice 2 e mais 3 casas para frente
const arrayslice = num.slice(2)
const arrayslice2 = num.slice(2,3)

//splice remove o indice 2 e as duas casas da frente 
num.splice(2,3)

let soma = 0
num.forEach(item => {
    console.log(item)
    soma =+ item
    console.log(soma)
});
