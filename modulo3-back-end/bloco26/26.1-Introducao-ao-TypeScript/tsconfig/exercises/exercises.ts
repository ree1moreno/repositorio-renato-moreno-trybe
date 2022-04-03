// ./exercises.ts

// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto "Olá Nome"
export function greeter(name: string) {
  return `Olá ${name}!`;
}

// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
export function personAge(name: string, age: number) {
  return `${name} tem ${age} anos!`;
}

// A terceira função que vamos desenvolver fará a adição de todos os números que estão dentro de um array.
export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// A quarta função que vamos desenvolver será para calcular a área do triângulo.
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

// A quinta função que vamos desenvolver será para calcular a área do quadrado.
export function square(side: number): number {
  return side ** 2;
}

// E a última função que vamos desenvolver será para calcular a área do retângulo.
export function rectangle(base: number, height: number): number {
  return base * height;
}

// Exercício

// Crie uma nova função para calcular a área do losango.
export function diamond(diagonal1: number, diagonal2: number): number {
  return (diagonal1 * diagonal2) / 2;
}

// Crie uma nova função para calcular a área do trapézio.
export function trapeze(base1: number, base2: number, height: number): number {
  return ((base1 + base2) * height) / 2;
}

// Crie uma nova função para calcular a área do círculo.
export function circle(radius: number): number {
  return 3.14 * radius ** 2;
}
