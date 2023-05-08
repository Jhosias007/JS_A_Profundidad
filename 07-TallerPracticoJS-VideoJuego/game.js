const canvas = document.querySelector("#game");
const btnUp = document.querySelector("#up");
const game = canvas.getContext("2d");

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);
btnUp.addEventListener("click", fnUp);

let elementSize;
let canvasSize;
let playerPosition = {
  x: undefined,
  y: undefined,
};

function setCanvasSize() {
  canvasSize =
    window.innerHeight > window.innerWidth
      ? window.innerWidth * 0.8
      : window.innerHeight * 0.8;

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);
  elementSize = (canvasSize - 16) / 10;

  // let ppx = 0 * elementSize;
  // let ppy = 0 * elementSize;

  startGame();
  return elementSize;
}

function startGame() {
  let inicio;
  game.font = elementSize + "px verdana";
  //game.textAlign = "start";

  let map = maps[0];
  let mapRow = map
    .trim() // Limpieza
    .split("\n") // Convierto a arr
    .map((i) => i.trim()); // Limpieza
  let mapRowCols = mapRow.map((i) => i.split(""));

  mapRowCols.forEach((row, rowI) => {
    row.forEach((col, colI) => {
      const emoji = emojis[col];
      const posX = elementSize * colI;
      const posY = elementSize * (rowI + 1);
      game.fillText(emoji, posX, posY);

      if (col == "O") {
        playerPosition.x = posX;
        playerPosition.y = posY;
      }
    });
  });
  console.log(playerPosition);
}

function fnUp() {
  playerPosition.y -= 1 * elementSize;
  game.fillText(emojis["PLAYER"], playerPosition.x, playerPosition.y);
}
