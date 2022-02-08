const readline = require('readline-sync');

const numero = readline.questionInt('Escolha um número entre 0 e 10. ');
const sorteio = (Math.random() * 10).toFixed(0);

if (numero === sorteio) {
  return console.log('Parabéns, número correto!')
} 
else {
  console.log(`Opa, não foi dessa vez. O número era ${sorteio}`);
}
