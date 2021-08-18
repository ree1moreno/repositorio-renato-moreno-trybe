// Depois, faça uma pirâmide com n asteriscos de base:

// n = 5

//   *
//  ***
// *****

let n = 5;
let text = '*';
let line = '';

let midTriangle = (n + 1) / 2;
let left = midTriangle;
let right = midTriangle;

for (let lineIndex = 0; lineIndex <= midTriangle; lineIndex += 1) {
  for (let columIndex = 0; columIndex <= n; columIndex += 1) {
    if (columIndex > left && columIndex < right) {
      line = line + text;
    } else {
      line = line + ' ';
    }
  }
  console.log(line);
  line = '';
  right += 1;
  left -= 1;
}
