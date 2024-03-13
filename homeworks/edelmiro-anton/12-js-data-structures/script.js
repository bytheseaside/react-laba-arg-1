import { data } from './MOCK_DATA.js';

//Data sorted for Binary Search
const sortedData = data.sort((a, b) => (a.sku > b.sku ? 1 : -1));

//DOM elements
const btn = document.querySelector('#btn');
const input = document.getElementById('inputValue');
const product = document.querySelector('.product');
const productBinary = document.querySelector('.productBinary');

/***** STRAIGHT SEARCH  *****/
function straightSearch(arr, id) {
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].sku === id) {
      return (product.innerHTML = `Your SKU(ID) for this product is <b>${arr[i].sku}.</b>  <br>
        Product name: ${arr[i].name}.<br>
        Price: ${arr[i].price}.<br>
        Pack: ${arr[i].pack}`);
    }
  }
}

//Click handler witch executes the above function & shows the performance in milliseconds
btn.addEventListener('click', () => {
  const start = performance.now(); //Line added to storage the milliseconds before the function was executed.
  straightSearch(data, input.value);
  const end = performance.now(); //Line added to storage the milliseconds after the function was executed.
  console.log(`Straight method tooks ${end - start} ms`); //Calculate the total milliseconds of the straight search
});

/***** BINARY SEARCH *****/
function binarySearch(arr, id) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let indexMid = Math.trunc((start + end) / 2);
    if (arr[indexMid].sku == id) {
      return (productBinary.innerHTML = `Your SKU(ID) for this product is <b>${arr[indexMid].sku}.</b>  <br>
        Product name: ${arr[indexMid].name}.<br>
        Price: ${arr[indexMid].price}.<br>
        Pack: ${arr[indexMid].pack}`);
    } else if (id < arr[indexMid].sku) {
      end = indexMid - 1;
    } else {
      start = indexMid + 1;
    }
  }
  return 'Invalid SKU';
}

//Click handler witch executes the above function & shows the performance in milliseconds
btn.addEventListener('click', () => {
  const start = performance.now(); //Line added to storage the milliseconds before the function was executed.
  binarySearch(sortedData, input.value);
  const end = performance.now(); //Line added to storage the milliseconds after the function was executed.
  console.log(`Binary method tooks ${end - start} ms`); //Calculate the total milliseconds of the binary search
});
