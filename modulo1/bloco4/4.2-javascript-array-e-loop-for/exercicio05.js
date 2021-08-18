// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNumero = numbers[0];

for (maior in numbers) {
  if (numbers[maior] > maiorNumero) {
  maiorNumero = numbers[maior];
  } 
}

console.log (maiorNumero);