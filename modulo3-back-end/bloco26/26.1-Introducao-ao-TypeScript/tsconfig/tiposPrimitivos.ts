let yes: boolean = true; // cria uma variável de nome "yes" e diz que o tipo é boleano e o valor é true
let no: boolean = false; // cria uma variável de nome "no" e diz que o tipo é boleano e o valor é false

// cria uma variável de nome "x" e diz que o tipo é number mas não seta o valor
// isso não funciona com const
let x: number;

let y: number = 0;
let z: number = 123.456;

let s: string;
let empty: string = '';
let abc: string = 'abc';

// void : existe apenas para indicar a ausência de um valor, como em uma função sem valor retornado.
function sayHelloWorld(): void {
  console.log('Hello World!');
}

let nullValue = null;
let undefinedValue = undefined;

//  Podemos declarar uma variável sem especificarmos explicitamente o tipo, e o compilador irá fazer a inferência do tipo através do valor passado para a variável.
let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = 'Hello World!'; // o compilador irá inferir o tipo string
