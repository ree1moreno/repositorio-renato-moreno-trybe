//  Agora inverta o lado do triângulo

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let n = 4;
let text = '*';
let line = '';
let position = n;


for (let index = 1; index <= n; index += 1) {
  for (let column = 1; column <= n; column += 1) {
    if (column < position) {
      line = line + ' ';
    } else {
      line = line + text;
    }
  }
  console.log(line);
  line = '';
  position -= 1;
};