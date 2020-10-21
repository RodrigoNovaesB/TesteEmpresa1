/*Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. 
A seguir, calcule e mostre o valor da conta a pagar.

CÓDIGO ESPECIFICAÇÃO PREÇO
1    Batata Frita R$ 4,23
2        X-Salada R$ 3,56
3         X-Bacon R$ 4,41
4 Cachorro Quente R$ 8,99
5    Refrigerante R$ 0,50

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme
tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto
decimal.

Exemplo de Entrada:
2 3
Exemplo de Saída:
Total: R$ 13,50

*/

//função de escolhe no menu, fixando o valor em 2 casas decimais.
function pedido(codigo, qtd) {
    if (codigo == 1) {
        let total = (qtd * 4.23).toFixed(2);
        return total;
    } if (codigo == 2) {
        let total = (qtd * 3.56).toFixed(2);
        return total;
    } if (codigo == 3) {
        let total = (qtd * 4.41).toFixed(2);
        return total;
    } if (codigo == 4) {
        let total = (qtd * 8.99).toFixed(2);
        return total;
    } if (codigo == 5) {
        let total = (qtd * 0.50).toFixed(2);
        return total;
    } else {
        let total = 0;
        return total;
    }
}

// utilizando valores ramdomicos para simular a entrada de dados.
const codigoProduto = Math.floor(Math.random() * (5 + 1));
const qtd = Math.floor(Math.random() * (10 + 1));

//chamando a função "pedido" e guardando o seu return em uma variável.
const valorTotal = pedido(codigoProduto, qtd);

//mostrando os valores final.
console.log(`Código do pedido: ${codigoProduto}`);
console.log(`Quantidade: ${qtd}`);
console.log(`Total R$: ${valorTotal}.`);

