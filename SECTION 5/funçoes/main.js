// function somar(num1 , num2) {
//     return num1+num2;
// }

// num1 = 10
// num2 = 20

// console.log(somar(num1 , num2))

function somar(num1 , num2) {
    return num1+num2;
}

const outraFuncao = (num1,num2) => {
    return num1*num2
}

console.log(outraFuncao(2,4))

num = outraFuncao(2,6)
console.log(somar(2,4)+num)

module.exports = {outraFuncao , somar}