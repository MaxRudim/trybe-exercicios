/*
let a = 161;
let b = 6;
let c = 4;
*/
/*
let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;
*/

/*
if (a > b && a > c) {
    console.log ('a é maior que b e c');
} else if (b > a && b > c) {
    console.log ('b é maior que a e c');
} else {
    console.log ('c é maior que a e b');
}
*/

/*
if (a == 0) {
    console.log('a é igual a 0');
} else if (a < 0) {
    console.log('a é menor que 0');
} else {
    console.log('a é maior que 0');
}
*/
/*
let soma = a + b + c;
if (soma == 180) {
    console.log('é um triângulo');
} else {
    console.log('erro, não é um triângulo');
}
*/
/*
let chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei: anda uma casa para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo: anda quantas casas quiser para a diagonal.');
    break;
  case 'rainha':
    console.log('Rainha: anda quantas casas quiser para a  diagonal, horizontal ou vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo: anda em "L" e pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre: anda quantas casas quiser para a horizontal ou vertical.');
    break;
  case 'peão':
    console.log("Peão:anda apenas uma casa para frente, na primeira jogada são até duas casas.");
    break;
  default:
    console.log('Erro, peça desconhecida.');
    break;
};
*/
/*
let nota = 101;

if (nota < 0 || nota > 100) {
    console.log('Nota inválida, só pode ser entre 0 e 100.')
} else if (nota >= 90) {
    console.log('Nota A')
} else if (nota >= 80) {
    console.log('Nota B')
} else if (nota >= 70) {
    console.log('Nota C')
} else if (nota >= 60) {
    console.log('Nota D')
} else if (nota >= 50) {
    console.log('Nota E')
} else {
    console.log ('Nota F')
};
*/

/*
if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
    console.log('true');
} else {
    console.log('false');
}
*/

/*
if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    console.log('true');
} else {
    console.log('false');
}
*/
/*
let custoProduto = 5;
let valorVenda = 10;

if (custoProduto >= 0 && valorVenda >= 0) {
  let custoTotal = custoProduto * 1.2; //1.2 é o imposto (multiplica 1 vez por si mesmo + 0.2 que são os 20%)
  let lucro = (valorVenda - custoTotal) * 1000; //vendeu 1000 produtos, por isto x1000
  console.log(lucro);
} else {
  console.log("Erro, os valores não podem ser negativos!");
};
*/
/*
let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 3500.00;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase - aliquotaIR));
*/