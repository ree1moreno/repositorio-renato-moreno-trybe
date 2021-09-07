// Desafio 10
function techList(array,name) {
  // seu código aqui
  let techList = [];
  array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < array.length; index += 1) {
    let object = {};
    object.tech = array[index];
    object.name = name;
    techList.push(object);
  }
  return techList;
}

// Desafio 11
function generatePhoneNumber(phoneArray) {
  // seu código aqui
  if (phoneArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < phoneArray.length; index += 1) {
    let count = 0;
    if (phoneArray[index] < 0 || phoneArray[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let number = index; number < phoneArray.length; number += 1) {
      if (phoneArray[index] === phoneArray[number]) {
        count += 1;
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  phoneArray.splice(0, 0, '(');
  phoneArray.splice(3, 0, ') ');
  phoneArray.splice(9, 0, '-');
  return phoneArray.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    return false;
  }
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let arrayString = string.split(' ');
  let numbers = [];
  let drinks = 0;
  for(let index = 0; index < arrayString.length; index += 1){
      if(Number(arrayString[index])){
          numbers.push(Number(arrayString[index]));
      }
  }
  for(let number = 0; number < numbers.length; number += 1){
      drinks += numbers[number];
  }
  if (drinks === 1) {
    return '1 copo de água';
  }
  return `${drinks} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
