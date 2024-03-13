const container = document.querySelector('#container');
const columns = 20;
const rows = 30;
const totalCells = columns * rows;

for (let i = 1; i <= 30; i++) {
  for (let j = 1; j <= 20; j++) {
    const cell = document.createElement('div');
    cell.classList.add('item');

    //Set atributes for ALL COLUMNS & ROWS
    cell.setAttribute('x', j);
    cell.setAttribute('y', i);

    const text = document.createElement('p');
    cell.appendChild(text);
    container.appendChild(cell);

    cell.addEventListener('click', (e) => {
      const boxes = document.querySelectorAll('div');
      const boxText = document.querySelectorAll('p');
      const columnX = e.currentTarget.getAttribute('x');
      const rowY = e.currentTarget.getAttribute('y');
      text.classList.toggle('textOn');

      //If the user do not hold the shift button, only the clicked cell will be selected
      // and the previous ones will have its original status
      if (!e.shiftKey) {
        boxes.forEach((div) => {
          div.style.backgroundColor = 'antiquewhite';
        });

        boxText.forEach((text) => {
          text.innerText = '';
        });
      }

      boxes.forEach((box) => {
        if (box.getAttribute('x') === columnX) {
          box.style.backgroundColor = 'lightblue';
        }
        if (box.getAttribute('y') === rowY) {
          box.style.backgroundColor = 'lightblue';
        }
      });
      text.innerHTML = `X:${columnX} <br> Y:${rowY}`;
    });

    cell.addEventListener('click', () => {
      cell.style.backgroundColor = 'blue';
      text.style.color = 'white';
      text.style.textAlign = 'center';
    });
  }
}
