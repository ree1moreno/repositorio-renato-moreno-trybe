// 1 - Dada uma matriz, transforme em um array.

 const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  const newArray = arrays.reduce((a, b) => a.concat(b));
  return newArray;
}

console.log(flatten(arrays));
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);