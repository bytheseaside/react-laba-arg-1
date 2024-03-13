import { data } from './MOCK_DATA.js';

//  LINEAR SEARCH

const buttonLinear = document.querySelector('.linear--button');
const inputLinear = document.querySelector('.linear--input');
const outputLinear = document.querySelector('.linear--output');

function clickHandlerLinear() {
  for (let i = 0; i < data.length; i++) {
    if (data[i].sku === inputLinear.value) {
      outputLinear.innerText = `Name: ${data[i].name}
      Pack: ${data[i].pack}
      Price: ${data[i].price}`;
    }
  }
}

buttonLinear.addEventListener('click', () => {
  console.time('Time elapsed(Linear)');
  buttonLinear.addEventListener('click', clickHandlerLinear);
  console.timeEnd('Time elapsed(Linear)');
});

// BINARY SEARCH

const dataSort = data.sort((a, b) => (a.sku > b.sku ? 1 : -1));
const buttonBinary = document.querySelector('.binary--button');
const inputBinary = document.querySelector('.binary--input');
const outputBinary = document.querySelector('.binary--output');

function clickHandlerBinary() {
  let start = 0;
  let end = dataSort.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (dataSort[middle].sku == inputBinary.value) {
      return (outputBinary.innerText = `Name: ${dataSort[middle].name}
        Pack: ${dataSort[middle].pack}
        Price: ${dataSort[middle].price}`);
    } else if (inputBinary.value < dataSort[middle].sku) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
}

buttonBinary.addEventListener('click', () => {
  console.time('Time elapsed (Binary)');
  buttonBinary.addEventListener('click', clickHandlerBinary);
  console.timeEnd('Time elapsed (Binary)');
});
