// gera um número entre o min e o max
function generateNumber(min, max) {
  // ref: http://devfuria.com.br/javascript/numeros-aleatorios/
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);
  return `(${r}, ${g}, ${b})`;
}

const text = document.getElementById('rgb-color');
text.innerHTML = generateNumber(0, 256);

const board = document.getElementById('balls-board');
function createColorBall() {
  for (let index = 1; index <= 6; index += 1) {
    const balls = document.createElement('div');
    balls.className = 'ball';
    board.appendChild(balls);
  }
}

createColorBall();

const balls = document.getElementsByClassName('ball');
const correctBall = Math.floor(Math.random() * 6);
// definida a posição da bola da resposta correta
// console.log(correctBall);
function generateBallsColor() {
  for (let index = 0; index < balls.length; index += 1) {
    if (index === correctBall) {
      balls[index].style.backgroundColor = `rgb${text.innerHTML}`;
      // console.log(`rgb${text.innerHTML}`);
    } else {
      balls[index].style.backgroundColor = `rgb${generateNumber(0, 256)}`;
      // console.log(`rgb${generateNumber(0, 256)}`);
    }
  }
}

generateBallsColor();

const answer = document.getElementById('answer');
const score = document.getElementById('score');

function getAnswer(event) {
  const guessColor = `rgb${document.getElementById('rgb-color').innerHTML}`;
  const guessShot = event.target.style.backgroundColor;
  if (guessShot === guessColor) {
    answer.innerHTML = 'Acertou!';
    // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
    score.innerHTML = Number(score.innerHTML) + 3;
  } else {
    answer.innerHTML = 'Errou! Tente novamente!';
  }
}

function clickBalls() {
  for (let index = 0; index < balls.length; index += 1) {
    const clickBall = balls[index];
    clickBall.addEventListener('click', getAnswer);
  }
}

clickBalls();

function generateNewColors() {
  text.innerHTML = generateNumber(0, 256);
  answer.innerHTML = 'Escolha uma cor';
  generateBallsColor();
}

const resetButton = document.getElementById('reset-game');

resetButton.addEventListener('click', generateNewColors);
