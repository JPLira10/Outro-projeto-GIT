//let numero1 ,numero2 ,divisao

//numero1 = 3numero2 = 2divisao = numero1 / numero2console.log(divisao)


/*let gasto, taxa, total

prompt("Digite o"+gasto+"no supermercado")
taxa = 0.1
total = taxa * gasto
console. log("O gasto foi de: "+total)

let gasto, taxa, total
gasto = parseFloat(prompt("Digite o gasto do cliente:"))
taxa = gasto*0.1
total = gasto+taxa
total = total.toFixed(2)
console.log(`O gasto total do cliente foi: R$ ${total}`) */

/*let base, altura, area
base = parseFloat(prompt("Digite a base do retângulo:"))
altura = parseFloat(prompt("Digite a altura do retângulo:"))
area = base * altura
console. log("A área do retângulo é ${area}")*/


let x, equacao


x = parseFloat(prompt("Digite o X da equação:"))
equacao = x**2 + 5x + 3 = 0
console. log(`O resultado dessa equação é: ${equaçao}`)





/* push = adiciona um elemento ao final da lista



pop = deleta ultimo elemento da lista



unshift = insere um elemento no inicio da lista



shift = deleta um elemento no inicio da lista



toUpperCase() = Faz as letras ficarem maiusculas




toLowerCase() = faz as letras ficarem minusculas




replace() = troca um caractere ou palavra por outro




typeof = retorna o tipo do caractere




toFixed() = dtermina o numero de casas decimais



While = é uma estrutura de repetiçao nao controlada




while (ano>=0){

    if(ano%400 == 0){
        console.log(`O ano ${ano} é bissexto.`)
    } else if ((ano%4 == 0)&&(ano%100 != 0)){
        console.log(`O ano ${ano} é bissexto.`)
    } else {
        console.log(`O ano ${ano} não é bissexto.`)
    }

    ano = parseInt(prompt("Digite outro ano ou um número negativo para sair:"))
    
}



for (let i = 2; i <= 52; i = i + 2){

    console.log(i)

}




for = é uma estrutura de repetição controlada */

let d=1
let soma=0
for (let u = 1; u <=99 ; u = u+2) {
    soma = soma+(u/d)
    d = d+1
}
console.log(soma)




/*Faça um programa que receba do usuário uma idade qualquer e diga se se trata de uma pessoa com maior ou menor idade penal.
Dicas: - Use a estrutura condicional com if e else;
        - Idade deve ser passada pelo usuário.*/


idade = parseInt(prompt("Digite quantos anos você tem:"))
if(idade => 18) {
    console.log("Você é um jovem")
} else{
    console.log("Você é um adulto")
}




/* Questão 2: Faça um programa que imprima a seguinte sequência: 3,6,9,...,90
Dica:
- Use a estrutura de repetição controlada for, lembrnado que for tem três parâmetros.
- for(variável com o valor inicial; condição de parada; número de passos)*/


for (let n =3; n <= 90; n = n + 3){
    console.log(n)
}




/* Questão 3: Faça um programa que recebe o numerador e o denominador de uma fração, calcule a fração e retorne o valor em uma mensagem como no exemplo abaixo:

Exemplo: "O resultado da fração entre 10 e 5 é: 2."

Dica: Use interpolação de string com ${}*/

let divisao, numerador, denominador
numerador = parseInt(prompt("Digite o numerador da fração"))
denominador = parseInt(prompt("Digite o denominador da fração"))
divisao = numerador/denominador
console.log('O resultado da fração entre '+numerador+' e '+denominador+' é: '+divisao+'.')