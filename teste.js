3 : let nome, nota1, nota2, nota3, media
nome = prompt("Digite seu nome:")
nota1 = parseFloat(prompt("Digite a primeira nota:"))
nota2 = parseFloat(prompt("Digite a segunda nota:"))
nota3 = parseFloat(prompt("Digite a terceira nota:"))
media=(nota1+nota2+nota3)/3
if (media >= 5) {
    console.log("Você foi aprovado")
}
else (media <= 5) {
    console.log("Você foi reprovado")
}

















let nota1

nota1 = parseFloat (prompt("Digite a nota :"))

if (nota1 >= 90) && (nota1 <=100) {
    console.log("A")
} else if ((nota1 >= 80) && (nota1 < 90)) {
    console.log("B")
} else if ((nota1 >= 70) && (nota1 < 80)) {
    console.log("C")
} else if ((nota1 >= 60) && (nota1 <70)) {
    console.log("D")
}
  else if ((nota1 >= 0) && (nota1 <60)) {
    console.log("F")
} else {
    console.log("Nota inválida")
}









const converteTemperatura = function (verifica, temperatura){

    let booleano, C, F

    if (verifica == "F") {
        booleano = true
    } else if (verfica == "C") {
        booleano = false
    } else {
        booleano = NaN
    } 

    if (booleano == true){
        C = temperatura
        F = C * 9/5 + 32
        return F
    } else if (booleano == false) {
        F = temperatura
        C = (F - 32) *5/9
        return C
    }
} 
console.log(converteTemperatura("F", 33))




idade = parseInt(prompt("Digite quantos anos você tem:"))
if(idade >= 18) {
    console.log("Você é um adulto")
} else if (idade <18 ){
    console.log("Você é um jovem")
}





