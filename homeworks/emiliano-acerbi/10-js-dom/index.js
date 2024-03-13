const AMOUNT_OF_COLUMNS = 20;
const AMOUTN_OF_ROWS = 30;
const TOTAL_CELLS = AMOUNT_OF_COLUMNS * AMOUTN_OF_ROWS;
let rowCount = 0;
let colCount = 0;

const root = document.getElementById('root');
root.classList.add('root');

// It's added here so you can change the amount of columns dynamically and it would still work.
root.style.gridTemplateColumns = `repeat(${AMOUNT_OF_COLUMNS}, auto)`;

// For loop to create all boxes based on TOTAL_CELLS
for (let i = 0; i < TOTAL_CELLS; i++) {
  const div = document.createElement('div');
  div.classList.add('box');

  const paragraph = document.createElement('p');
  div.appendChild(paragraph);

  if (i % AMOUNT_OF_COLUMNS === 0) {
    rowCount++;
  }

  colCount++;
  if (i % AMOUNT_OF_COLUMNS === 0) {
    colCount = colCount - colCount + 1;
  }

  div.setAttribute('column', colCount);
  div.setAttribute('row', rowCount);

  // We add a function for each box
  div.addEventListener('click', (e) => {
    const divs = document.querySelectorAll('div');
    const currentCol = e.currentTarget.getAttribute('column');
    const currentRow = e.currentTarget.getAttribute('row');
    const paragraphs = document.querySelectorAll('p');

    // If the user holds shift, the state doesn't reset so it holds previous clicks
    if (!e.shiftKey) {
      // Reset every other box from previous states
      divs.forEach((div) => {
        div.style.backgroundColor = '#121212';
      });

      // Reset every other paragraph from previous states
      paragraphs.forEach((paragraph) => {
        paragraph.innerText = '';
      });
    }

    // All the boxes of the same X and Y axis will be colored
    divs.forEach((div) => {
      if (div.getAttribute('column') === currentCol) {
        div.style.backgroundColor = 'lightblue';
      }
      if (div.getAttribute('row') === currentRow) {
        div.style.backgroundColor = 'lightblue';
      }
    });

    // Paints the clicked div
    div.style.backgroundColor = '#2565AE';

    // Sets paragraph of current div to the coords
    paragraph.innerText = 'X: ' + currentRow + ' Y: ' + currentCol;
  });

  root.appendChild(div);
}
