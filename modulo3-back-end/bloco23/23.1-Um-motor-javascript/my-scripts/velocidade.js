const readline = require('readline-sync');

const distancia = readline.questionInt('Quantos metros percorreu? ');
const tempo = readline.questionInt('Em quantos segundos? ');

const velocidadeMedia = distancia / tempo;

console.log(`A velocidade média é ${velocidadeMedia} m/s.`)