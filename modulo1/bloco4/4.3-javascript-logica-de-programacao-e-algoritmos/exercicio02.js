// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// n = 5
// *
// **
// ***
// ****
// *****

let n = 4;
let text = '*';
let line = '';


for (let index = 0; index < n; index += 1) {
  line = line + text;
  console.log(line);
};