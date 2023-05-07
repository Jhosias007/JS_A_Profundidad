const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", setCanvasSize);
window.addEventListener("resize", setCanvasSize);

let elementSize;
let canvasSize;

function setCanvasSize() {
  canvasSize =
    window.innerHeight > window.innerWidth
      ? window.innerWidth * 0.8
      : window.innerHeight * 0.8;

  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);
  elementSize = (canvasSize- 16) / 10;

  startGame();
}

function startGame() {
  game.font = elementSize + "px verdana";
  //game.textAlign = "start";

  let map = maps[1];
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

      console.log({ row, rowI, col, colI });
    });
  });

  console.log(map, mapRow, mapRowCols);

  // for (let x = 0; x < 10; x++) {
  //   for (let y = 0; y < 10; y++) {
  //     game.fillText(emojis[map[x][y]], elementSize * y, elementSize * x + 45);
  //   }
  // }

  // game.fillText(emojis["X"], elementSize + 15, elementSize);
}
