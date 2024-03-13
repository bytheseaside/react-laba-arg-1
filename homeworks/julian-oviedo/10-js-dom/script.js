const container = document.querySelector('.grid-container');

for (let i = 1; i <= 30; i++) {
  for (let j = 1; j <= 20; j++) {
    let div = document.createElement('div');
    div.setAttribute('data-row', i);
    div.setAttribute('data-col', j);
    div.className = 'cell';
    container.append(div);
  }
}

const allCells = document.querySelectorAll('div');
const allCellsArr = [...allCells];

function styleActiveAxis(cells) {
  for (let cell of cells) {
    cell.style.setProperty('background-color', 'lightblue');
  }
}

function clickHandler(e) {
  const clicked = e.target;
  const rowNum = clicked.getAttribute('data-row');
  const colNum = clicked.getAttribute('data-col');
  const fullRow = document.querySelectorAll(`[data-row="${rowNum}"`);
  const fullCol = document.querySelectorAll(`[data-col="${colNum}"`);

  if (e.shiftKey && clicked.matches('.cell')) {
    clicked.style.setProperty('background-color', 'blue');
    clicked.innerText = `x : ${rowNum} 
    y : ${colNum}`;
  } else if (clicked.matches('.cell')) {
    allCellsArr.forEach((e) => {
      e.style.setProperty('background-color', 'white');
      e.innerText = '';
    });
    styleActiveAxis([...fullRow, ...fullCol]);
    clicked.style.setProperty('background-color', 'blue');
    clicked.innerText = `x : ${rowNum} 
    y : ${colNum}`;
  }
}

container.addEventListener('click', clickHandler);
