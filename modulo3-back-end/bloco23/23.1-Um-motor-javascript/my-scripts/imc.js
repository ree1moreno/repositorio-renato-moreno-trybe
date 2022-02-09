// PARTE 1 - função com peso e altura fixos

// function calcIMC(peso, altura) {
//   return (peso / Math.pow(altura, 2)).toFixed(2);
// }

// console.log(`O seu IMC é ${calcIMC(73.4, 1.78)}.`);

// PARTE 2 - função IMC mais interativa
const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ');

const imc = (peso / Math.pow(altura, 2)).toFixed(2);

console.log(`O seu IMC é ${imc}.`);

switch (true) {
  case (imc < 18.5):
    console.log('Abaixo do peso (magreza)');
    break;
  case (imc < 24.9):
    console.log('Peso normal');
    break;
  case (imc < 29.9):
    console.log('Acima do peso (sobrepeso)');
    break;
  case (imc < 34.9):
    console.log('Obesidade grau I');
    break;
  case (imc < 39.9):
    console.log('Obesidade grau II');
    break;
  default:
    console.log('Obesidade graus III e IV')
    break;
}