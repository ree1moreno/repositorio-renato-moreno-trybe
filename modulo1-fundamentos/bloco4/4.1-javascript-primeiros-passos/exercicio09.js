// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// Bonus: use somente um if .

const a = 2;
const b = 4;
const c = 6;

let oddNumber = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  oddNumber = true;
} 
  console.log (oddNumber);