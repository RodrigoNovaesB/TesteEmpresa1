/* Faça um programa que calcule o fatorial de um número inteiro fornecido pelo usuário.
Ex.: 5!=5.4.3.2.1=120. A saída deve ser conforme o exemplo abaixo:

Fatorial de: 5
5! = 5 . 4 . 3 . 2 . 1 = 120*/

//função caulculo fatorial. 
function fatorial(num) {

    num = parseInt(num);

    if (num < 0) {
        return 'Valor deve ser maior ou igual a zero!!';
    } else if (num == 1 || num == 0) {

        return 1;

    } else {
        let acumula = 1;

        for (let i = num; i > 1; i--) {
            acumula = acumula * i;
        }
        num = acumula;
    }
    return num;
}

const numeroPedido = 10;
const resposta = fatorial(numeroPedido);
const numerosFatorial = [];
let sequencia = '';

//laço para salvar a sequentica dos numeros fatoriais. 
for (let i = numeroPedido; i >= 1; i--) {
    numerosFatorial.push(i);
}

//guardando em uma variável para apresentar o texto em uma linha.
for (let i = 0; i < numeroPedido - 1; i++) {
    sequencia += numerosFatorial[i] + '.';
}

//respostas
console.log(`fatorial de ${numeroPedido}: ${resposta} \n`);
console.log(`${numeroPedido}! = ${sequencia}1 = ${resposta}`);