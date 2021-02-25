/* DESCOBRE A MÉDIA E IMPRIME SE FOR MAIOR QUE 20
let somaNumbers = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    somaNumbers += numbers[index];
}
console.log('A média aritmética é de: ' + somaNumbers / numbers.length);

if (somaNumbers / numbers.length > 20) {
    console.log('O valor é maior que 20.');
} else {
    console.log('O valor é menor ou igual a 20.');
}
*/
/* MAIOR NUMERO (SÓ INVERTER O SINAL PARA BUSCAR O MENOR NÚMERO E RESOLVER ITEM 7)
numeroAnterior = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > numeroAnterior) {
        numeroAnterior = numbers[index];
    }
}

console.log('O maior número é ' + numeroAnterior);
*/
/* contador de números ímpares
numerosImpares = 0;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 != 0) {
        numerosImpares += 1;
    }
}

if (numerosImpares != 0) {
    console.log('A quantidade de números ímpares é: ' + numerosImpares);
} else {
    console.log('Nenhum valor ímpar encontrado');
}
*/
/* imprimir em arrays numeros de 1 a 25
let array = [];

for (let index = 1; index < 26; index += 1) {
    array.push(index);
}

console.log(array);
*/
let array = [];

for (let index = 1; index < 26; index += 1) {
    let divisao = index / 2;
    array.push(divisao);
}

console.log(array);