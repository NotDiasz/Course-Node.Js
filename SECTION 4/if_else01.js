const nota1 = 6
const nota2 = 10
const nota3 = 7

const soma = nota1 + nota2 + nota3
const media = soma / 3

if(media <= 3) {
    console.log("Horrivel")
    console.log(media)
}
    else if (media <= 7 ){
    console.log("melhore")
    console.log(media)
}
    else if (media <= 10){
    console.log("excelente")
    console.log(media)
}
    else if (media > 10 || media < 0){
    console.log("ERROR") 
}
    
