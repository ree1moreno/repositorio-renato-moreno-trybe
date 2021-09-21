// sum.test.js
const sum = require('./sum');

test('4 mais 5 é igual a 9', () => {
  expect(sum(4, 5)).toBe(9);
});

test('0 mais 0 é igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('mostrar um erro caso um parametro seja do tipo string', () => {
  expect(() => sum(4, '5')).toThrow();
});

test('mensagem de erro dizendo que os parametros devem ser números', () => {
  expect(() => sum(4, '5')).toThrow();
});
