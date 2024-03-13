'use strict';
const NUMBER_OF_COLS = 20;
const NUMBER_OF_ROWS = 30;
let cell;

// create the 20x30 grid
// each grid has attributes with it's own row and column number
for (let i = 1; i <= NUMBER_OF_ROWS; i++) {
  for (let j = 1; j <= NUMBER_OF_COLS; j++) {
    cell = document.createElement('p');
    cell.className = 'cell';
    cell.setAttribute('data-row', i);
    cell.setAttribute('data-col', j);
    document.body.append(cell);
  }
}

// add event listener to body (Event Delegation approach)
document.body.addEventListener('click', function (event) {
  let target = event.target;
  // get the row and column number of the clicked cell
  let row = target.dataset.row;
  let col = target.dataset.col;
  // get the cell that has the same row and column number of the clicked cell
  let sameColCells = document.querySelectorAll(`[data-col="${col}"]`);
  let sameRowCells = document.querySelectorAll(`[data-row="${row}"]`);

  if (!(target.classList.contains('cell'))) { // if the clicked element is not a cell
    return;
  }

  // reset previous state if shift key is not pressed
  if (!event.shiftKey) {
    document.querySelectorAll(`.colored`).forEach((cell) => {
      cell.style.backgroundColor = 'white'; // reset previous background color
      cell.innerText = ''; // reset text
      cell.className = 'cell'; // overwrite all added clases with only 'cell' class
    });
  }

  // change background color
  target.style.backgroundColor = 'blue';
  target.innerText = `R:${row}\nC:${col}`; 
  target.classList.add('colored','clicked');

  sameRowCells.forEach(function (cell) {
    if (!(cell.classList.contains('clicked'))){  // it's in the selected row but not the clicked one
      cell.style.backgroundColor = 'lightblue';
      cell.classList.add('colored');
    }
  });
  sameColCells.forEach(function (cell) {
    if (!(cell.classList.contains('clicked'))){  // it's in the selected column but not the clicked one
      cell.style.backgroundColor = 'lightblue';
      cell.classList.add('colored');
    }
  });
});
