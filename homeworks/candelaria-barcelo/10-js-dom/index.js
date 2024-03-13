// create 600 divs, one for each cell, and add id: "column/row" for each
for (let i = 1; i <= 600; i++) {
  const newDiv = document.createElement('div');
  newDiv.classList.add('cell');
  if (i % 20 === 0) {
    newDiv.id = 20 + '/' + Math.ceil(i / 20);
  } else {
    newDiv.id = (i % 20) + '/' + Math.ceil(i / 20);
  }
  document.body.appendChild(newDiv);
}

// mark when shift key is pressed or not
let shiftKeyStatus = 'up';
const keydownHandler = (e) => {
  if (e.key === 'Shift') shiftKeyStatus = 'down';
};

const keyupHandler = (e) => {
  if (e.key === 'Shift') shiftKeyStatus = 'up';
};

document.body.addEventListener('keydown', keydownHandler);
document.body.addEventListener('keyup', keyupHandler);

// click handler
let lastClickedId = '';

const clickHandler = (event) => {
  let clickedItem = event.target;

  // unmark previous active cell(s), because we've now clicked another cell
  if (lastClickedId) {
    if (clickedItem.id && shiftKeyStatus === 'up') {
      let lastClickedElements = document.getElementsByClassName('selected');
      let previousActiveList = document.getElementsByClassName('active-row-col');
      for (let i = previousActiveList.length - 1; i >= 0; i--) {
        previousActiveList[i].classList.remove('active-row-col');
      }
      for (let i = lastClickedElements.length - 1; i >= 0; i--) {
        lastClickedElements[i].innerText = '';
        lastClickedElements[i].classList.remove('selected');
      }
    }
  }

  // color blue the selected cell and add col/row inner text
  if (clickedItem.id) {
    lastClickedId = clickedItem.id;
    clickedItem.classList.add('selected');
    clickedItem.innerText = clickedItem.id;
  }

  // color light blue the selected cell's column and row
  let lastClickedCol = lastClickedId.match(/(\d+)\/\d+/)[1];
  let lastClickedRow = lastClickedId.match(/\d+\/(\d+)/)[1];
  for (let i = 1; i <= 30; i++) {
    // color the column
    let currentId = lastClickedCol + '/' + i;
    if (lastClickedId !== currentId) {
      // make all other elements in col (whose id regex matches lastclickedcol) toggle active class
      document.getElementById(currentId).classList.add('active-row-col');
    }
  }
  for (let i = 1; i <= 20; i++) {
    // color the row
    let currentId = i + '/' + lastClickedRow;
    if (lastClickedId !== currentId) {
      document.getElementById(currentId).classList.add('active-row-col');
    }
  }
};

document.body.addEventListener('click', clickHandler);
