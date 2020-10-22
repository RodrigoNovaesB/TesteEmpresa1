/*Exiba todos os números pares e ímpares dentro do array abaixo:
var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

Exemplo de saída:
Números pares: 1, 1, 1, 1, 1
Números ímpares: 1, 1, 1, 1*/


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let pares = [];
let impares = [];

//laço para separar os numeros em vetores pares e impares.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

//apresentando os numeros pares e impares
console.log(`Numeros pares: ${pares}.`);
console.log(`Numeros impares: ${impares}.`);