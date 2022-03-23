"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = exports.trapeze = exports.diamond = exports.rectangle = exports.square = exports.triangle = exports.sumArray = exports.add = exports.personAge = exports.greeter = void 0;
// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto "Olá Nome"
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
function personAge(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.personAge = personAge;
// A terceira função que vamos desenvolver fará a adição de todos os números que estão dentro de um array.
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
// A quarta função que vamos desenvolver será para calcular a área do triângulo.
function triangle(base, height) {
    return (base * height) / 2;
}
exports.triangle = triangle;
// A quinta função que vamos desenvolver será para calcular a área do quadrado.
function square(side) {
    return side ** 2;
}
exports.square = square;
// E a última função que vamos desenvolver será para calcular a área do retângulo.
function rectangle(base, height) {
    return base * height;
}
exports.rectangle = rectangle;
// Exercício
// Crie uma nova função para calcular a área do losango.
function diamond(diagonal1, diagonal2) {
    return (diagonal1 * diagonal2) / 2;
}
exports.diamond = diamond;
// Crie uma nova função para calcular a área do trapézio.
function trapeze(base1, base2, height) {
    return ((base1 + base2) * height) / 2;
}
exports.trapeze = trapeze;
// Crie uma nova função para calcular a área do círculo.
function circle(radius) {
    return 3.14 * radius ** 2;
}
exports.circle = circle;
