// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

// n = 5
// *****
// *****
// *****
// *****
// *****

let n = 3;
let text = '*';
let line = '';

for (let index = 0; index < n; index += 1) {
  line = line + text;
}; 
for (let index = 0; index < n; index += 1) {
  console.log (line);
};
