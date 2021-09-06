// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
    return false;
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return base * height / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6

function highestCount(array) {
  // seu código aqui
  let higherNumber = array[0];
  let repeatTimes = 0;
  for (let number of array) {
    if (higherNumber < number) {
      higherNumber = number;
    }
  }
  for (let repeated of array) {
    if (repeated === higherNumber) {
      repeatTimes += 1;
    }
  }
  return repeatTimes;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let distance1 = cat1 - mouse;
  let distance2 = cat2 - mouse;
  if (distance1 < 0) {
    distance1 = distance1 * -1;
  }
  if (distance2 < 0) {
    distance2 = distance2 * -1;
  }
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance1 > distance2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let value = [];
  for (let number of numbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      value.push('fizzBuzz');
    }
    else if (number % 3 === 0) {
      value.push('fizz');
    }
    else if (number % 5 === 0) {
      value.push('buzz');
    } else {
      value.push('bug!');
    }
  }
  return value;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let encodeArray = string.split('');
  for (let index = 0; index < encodeArray.length; index += 1) {
    switch(encodeArray[index]) {
      case 'a':
        encodeArray[index] = 1;
        break;
      case 'e':
        encodeArray[index] = 2;
        break;
      case 'i':
        encodeArray[index] = 3;
        break;
      case 'o':
        encodeArray[index] = 4;
        break;
      case 'u':
        encodeArray[index] = 5;
        break;
    }
  }
  encodeArray = encodeArray.join('');
  return encodeArray;
}

function decode(string) {
  // seu código aqui
  let decodeArray = string.split('');
  for (let index = 0; index < decodeArray.length; index += 1) {
    switch(decodeArray[index]) {
      case '1':
        decodeArray[index] = 'a';
        break;
      case '2':
        decodeArray[index] = 'e';
        break;
      case '3':
        decodeArray[index] = 'i';
        break;
      case '4':
        decodeArray[index] = 'o';
        break;
      case '5':
        decodeArray[index] = 'u';
        break;
    }
  }
  decodeArray = decodeArray.join('');
  return decodeArray;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
