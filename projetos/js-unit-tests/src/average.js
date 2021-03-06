/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (arrayNumeros) => {
  let soma = 0;
  if (arrayNumeros.length === 0) {
    return undefined;
  }
  for (let index = 0; index < arrayNumeros.length; index += 1) {
    if (typeof arrayNumeros[index] !== 'number') {
      return undefined;
    }
    soma += arrayNumeros[index];
  }
  const media = soma / arrayNumeros.length;
  // ref: Arredondar valores - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/round
  return Math.round(media);
};

module.exports = average;
