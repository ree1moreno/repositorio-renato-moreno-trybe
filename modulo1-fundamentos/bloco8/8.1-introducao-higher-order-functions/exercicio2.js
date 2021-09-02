// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const gerarNumero = Math.round(Math.random() * (5 - 1) + 1);

const sorteio = meuNumero => {
  if (meuNumero === gerarNumero) {
    console.log('Parabéns você ganhou');
  } else {
    console.log('Tente novamente');
  }
}

console.log(gerarNumero);
sorteio(2, gerarNumero);