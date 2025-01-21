function  soma(num1 , num2){
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Favor informar um Numero')
    }
    if (num2 == 0) {
        return 0;
    }
    return num1 +num2;
}

function multi(num1 , num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Favor informar um Numero')
    }
    if (num2 == 0) {
        return 0;
    }
    return num1 * num2
}

module.exports = {soma , multi}