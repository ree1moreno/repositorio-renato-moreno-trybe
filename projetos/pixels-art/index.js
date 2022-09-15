const colorPalette = document.getElementById("color-palette");
const colorsButton = document.getElementById("generate-colors");
const colorQuantity = Number(
  prompt(
    "Bem vindo ao quadro de pintura!\nQuantas cores deseja utilizar?\nRecomendado até 20 cores.",
  ),
);

function createPalette(quantity) {
  for (let i = 0; i < quantity; i++) {
    const colorElement = document.createElement("div");
    colorElement.classList.add("color");
    colorPalette.appendChild(colorElement);
  }
}

createPalette(colorQuantity);

const firstColor = document.getElementsByClassName("color")[0];
firstColor.style.backgroundColor = "rgb(0, 0, 0)";
firstColor.classList.add("selected");

function generateRandomColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

const colors = Array.from(document.getElementsByClassName("color"));

colors.forEach((color, index) => {
  if (index > 0) color.style.backgroundColor = generateRandomColor();
});

const pixelBoard = document.getElementById("pixel-board");
const pixelQuantity = document.getElementById("board-size");
const boardButton = document.getElementById("generate-board");
let boardsize = 10;

boardButton.addEventListener("click", () => {
  if (
    !pixelQuantity.value ||
    pixelQuantity.value < 5 ||
    pixelQuantity.value > 30
  ) {
    alert("Board Inválido!\nInsira um valor entre 5 e 30.");
  } else {
    boardsize = pixelQuantity.value;
    pixelBoard.innerHTML = "";
    createPixelBoard(boardsize);
  }
});

function createPixelBoard(boardsize) {
  for (let i = 0; i < boardsize ** 2; i++) {
    const pixelElement = document.createElement("div");
    pixelElement.classList.add("pixel");
    pixelBoard.style.width = `${40 * boardsize}px`;
    pixelBoard.appendChild(pixelElement);
    firstColor.classList.add("selected");
  }
}

createPixelBoard(boardsize);

function changeSelected(newColor) {
  const changeColor = document.getElementsByClassName("selected")[0];
  changeColor.classList.remove("selected");
  newColor.target.classList.add("selected");
}

colors.forEach((color) => color.addEventListener("click", changeSelected));

function pixelColor(event) {
  if (event.target.classList.contains("pixel")) {
    const getSelected = document.querySelector(".selected");
    const getBckgcolor = window
      .getComputedStyle(getSelected)
      .getPropertyValue("background-color");
    event.target.style.backgroundColor = getBckgcolor;
  }
}

document.addEventListener("click", pixelColor);

const clearButton = document.getElementById("clear-board");

function clearBoard() {
  const boardColors = document.querySelectorAll(".pixel");
  boardColors.forEach((pixel) => (pixel.style.backgroundColor = "white"));
}

clearButton.addEventListener("click", clearBoard);
