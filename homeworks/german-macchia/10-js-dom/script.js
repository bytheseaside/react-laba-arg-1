const COLS = 20; //or prompt('set Cols');
const ROWS = 30; //or prompt('set Rows');
const PX = 40;
let shiftKey = false;

document.addEventListener(
  "keydown",
  (event) => {
    shiftKey = event.shiftKey;
  },
  false
);

document.addEventListener(
  "keyup",
  (event) => {
    shiftKey = event.shiftKey;
  },
  false
);

function setAllCellsWhite() {
  let allCells = document.querySelectorAll(".cell");
  for (let cell of allCells) {
    cell.style.setProperty("background-color", "white");
    cell.innerHTML = null;
  }
}

function paintAxisCells(cellArr) {
  for (let cellBox of cellArr) {
    cellBox.style.setProperty("background-color", "lightblue");
  }
}

function setEventListener(cell) {
  cell.addEventListener("click", () => {
    if (!shiftKey) setAllCellsWhite();

    let column = cell.getAttribute("data-col");
    let row = cell.getAttribute("data-row");
    let columCells = document.querySelectorAll(`[data-col= "${column}"]`);
    let rowCells = document.querySelectorAll(`[data-row= "${row}"]`);

    cell.innerHTML = `<p>x: ${row} y: ${column}</p>`;
    paintAxisCells([...columCells, ...rowCells]);
    cell.style.setProperty("background-color", "blue");
  });
}

function createNewCell(id, col, row) {
  let cell = document.createElement("div");
  cell.setAttribute("data-id", id);
  cell.setAttribute("data-col", col);
  cell.setAttribute("data-row", row);
  cell.classList.add("cell");
  setEventListener(cell);

  return cell;
}

function createGrid(cols, rows, px) {
  const ROOT = document.querySelector(":root");
  const GRID = document.querySelector(".grid");
  const CELLS = cols * rows;

  ROOT.style.setProperty("--cols", cols);
  ROOT.style.setProperty("--rows", rows);
  ROOT.style.setProperty("--px", px + "px");
  let actualCol = 0;
  let actualRow = 1;

  for (let i = 1; i <= CELLS; i++) {
    if (actualCol == cols) {
      actualCol = 1;
      actualRow++;
    } else {
      actualCol++;
    }
    let cell = createNewCell(i, actualCol, actualRow);
    GRID.appendChild(cell);
  }
}

createGrid(COLS, ROWS, PX);
