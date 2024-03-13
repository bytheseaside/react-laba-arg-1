const onClick = (e) => {
  const clicked = e.target;
  if (!!e.shiftKey) {
    toggle(clicked);
  } else {
    clearSelected();
    toggle(clicked);
  }
};

const clearSelected = () => {
  const allBoxElem = document.querySelectorAll('li');
  allBoxElem.forEach((element) => {
    unSelect(element);
  });
};

const select = (element) => {
  const row = element.getAttribute('row');
  const col = element.getAttribute('col');
  element.innerText = `x: ${row}  y: ${col}`;
  element.classList.add('box--selected');
};

const unSelect = (element) => {
  element.classList.remove('box--selected');
  element.innerText = '';
};

const toggle = (element) => {
  if (element.innerText) {
    unSelect(element);
  } else {
    select(element);
  }
};

function createLayout() {
  const containerElem = document.getElementById('container');
  for (let i = 1; i <= 30; i++) {
    for (let j = 1; j <= 20; j++) {
      const box = document.createElement('li');
      box.setAttribute('row', i);
      box.setAttribute('col', j);
      box.className = 'box';
      box.addEventListener('click', onClick);

      containerElem.append(box);
    }
  }
}

createLayout();
