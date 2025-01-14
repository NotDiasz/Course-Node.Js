function  soma(num1 , num2){
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Favor informar um Numero')
    }
    return num1 -num2;
}

function multi(num1 , num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Favor informar um Numero')
    }
    return num1 * num2
}

module.exports = {soma , multi}