// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index);
}

for (number in array) {
  console.log(array[number] / 2);
}
