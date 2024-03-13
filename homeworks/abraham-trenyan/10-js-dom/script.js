function createGrid(cols, rows) {
  const body = document.querySelector('body');
  for (let i = 0; i <= cols; i++) {
    body.innerHTML += `<div class="column" id=column${i}></div>`;
    for (let j = 0; j <= rows; j++) {
      let col = document.querySelector(`#column${i}`);
      col.innerHTML += `<div class="cell" col=${i} row=${j}><span class="text text--hidden" col=${i} row=${j}>X: ${i} Y: ${j}</span></div>`;
    }
  }
}
createGrid(20, 30);
let column = document.querySelectorAll('.column');
column.forEach((col) => {
  col.addEventListener('click', select);
});
function select(e) {
  const cells = document.querySelectorAll('div');
  let selected = e.target;
  if (selected.className.includes('cell') || selected.className.includes('text')) {
    let r = selected.getAttribute('row');
    let c = selected.getAttribute('col');
    let activeCol = document.querySelectorAll(`[col="${c}"]`);
    let activeRow = document.querySelectorAll(`[row="${r}"]`);
    if (!e.shiftKey) {
      cells.forEach((cell) => {
        // Resets all cells to white
        cell.classList.remove('colored', 'active');
        cell.children[0].classList.add('text--hidden');
      });
    }
    selected.className.includes('text') // Paints selected cell
      ? selected.parentElement.classList.toggle('colored')
      : selected.classList.toggle('colored');
    selected.className.includes('text')
      ? selected.classList.toggle('text--hidden')
      : selected.children[0].classList.toggle('text--hidden');
    for (let i = 0; i < activeCol.length; i++) {
      // Highlights active cols and rows
      if (activeCol[i].tagName == 'DIV') {
        activeCol[i].classList.add('active');
      }
    }
    for (let i = 0; i < activeRow.length; i++) {
      if (activeRow[i].tagName == 'DIV') {
        activeRow[i].classList.add('active');
      }
    }
  }
}
