'use strict';
import { MOCK_DATA } from './MOCK_DATA.js';
// sort MOCK_DATA by sku for binary search
let SORTED_MOCK_DATA = JSON.parse(JSON.stringify(MOCK_DATA)); //Deep clone MOCK_DATA
SORTED_MOCK_DATA.sort(sortBySku); // sort by sku for binary search
// console.log(MOCK_DATA===SORTED_MOCK_DATA); //false: we can check it's a sorted deep clone

//HANDLER FUNCTION
function handler(event) {
  if (!event.target.classList.contains('buttons-container__button')) {
    // if event was not triggered by a button, return
    return;
  }
  let button = event.target;
  let result;
  let searchMethod = button.dataset.searchtype; // get the search method we're using
  let input = document.querySelector('.form__sku-input');

  let resultInfo = document.querySelector('.search-result');

  let searchedSku = input.value;

  searchedSku = parseSku(searchedSku);

  if (searchMethod === 'straight') {
    result = straightSearch(searchedSku);
  } else if (searchMethod === 'binary') {
    result = binarySearch(searchedSku);
  }

  if (result === null) {
    resultInfo.innerHTML = 'No match found. Try checking the sku given.';
  } else {
    resultInfo.innerHTML = `Name: ${result.name} \n Price: ${result.price} \n Pack: ${result.pack}`;
  }
}

// SKU PARSER
function parseSku(sku) {
  let parsedSku = sku.split('-').join(''); // remove dashes from sku if any
  parsedSku = parsedSku.toLowerCase(); // make sku lowercase
  // add dashes to sku where needed
  parsedSku =
    parsedSku.slice(0, 8) +
    '-' +
    parsedSku.slice(8, 12) +
    '-' +
    parsedSku.slice(12, 16) +
    '-' +
    parsedSku.slice(16, 20) +
    '-' +
    parsedSku.slice(20);

  return parsedSku;
}

// SORTING FUNCTION FOR BINARY SEARCH
function sortBySku(obj1, obj2) {
  if (obj1.sku < obj2.sku) {
    return -1;
  } else {
    return 1;
  }
}

// STRAIGHT SEARCH IMPLEMENTATION
// check sku elem by elem
function straightSearch(searchedSku) {
  let index = null;
  for (let i = 0; i < MOCK_DATA.length; i++) {
    if (MOCK_DATA[i].sku === searchedSku) {
      index = i;
      break;
    }
  }
  if (index === null) {
    return null;
  }
  return MOCK_DATA[index]; // returns the object whose sku matches the searched sku
}

// BINARY SEARCH IMPLEMENTATION
function binarySearch(searchedSku) {
  if (searchedSku === '') {
    return null;
  }
  let startIndex = 0;
  let stopIndex = SORTED_MOCK_DATA.length - 1;
  let middle = Math.floor((stopIndex + startIndex) / 2);

  while (SORTED_MOCK_DATA[middle].sku != searchedSku && startIndex < stopIndex) {
    //adjust search area
    if (searchedSku < SORTED_MOCK_DATA[middle].sku) {
      stopIndex = middle - 1;
    } else if (searchedSku > SORTED_MOCK_DATA[middle].sku) {
      startIndex = middle + 1;
    }
    //recalculate middle
    middle = Math.floor((stopIndex + startIndex) / 2);
  }
  //make sure it's the right value
  return SORTED_MOCK_DATA[middle].sku === searchedSku ? SORTED_MOCK_DATA[middle] : null;
}
//////////////////////////////////////////////////////////////////////////////////////////////
// TEST AND PERFORMANCE TEST
function gotCorrectResult(sku, obj, searchMethod, counter) {
  // sku: sku code we're looking to match
  // obj: object it should ideally return
  // searchMethod: search method we're using

  let startTime;
  let endTime;

  //run the search method and get the running time
  startTime = performance.now();
  let result = searchMethod(sku);
  endTime = performance.now();
  let isCorrect = result === obj; // check if result is the same as the expected result


  // PRINT RELEVANT INFO TO THE CONSOLE /////////////////////////////////////////////////////
  console.groupCollapsed(`Test ${counter} -  SKU: ${sku}`); //create a collapsible group in the console for this test

  //Time taken
  console.log(`Took ${endTime - startTime} ms to run.`);
  //Result 
  console.log(`Correct result: ${isCorrect}`);
  if (!isCorrect) {
    console.table(`${result},${obj}`);
  }
  console.log('\n');
  console.groupEnd(`Test ${counter} -  SKU: ${sku}`); //close collapsible group
  //////////////////////////////////////////////////////////////////////////////////////////////

  return;
}

//Variables for testing
const numberOfTests = 46;
let randomIndex;
let ACorrectSkuButNotFormated = 'ccdb70f4---91f14543----93fa--8a93f980dc99';
const someTestingStr = ["HelloI'm", 'NotACorrectSku', "I'mACorrectSkuButNotFormated:", ACorrectSkuButNotFormated];

//STRAIGHT SEARCH TESTING

//Test straight search with random skus taken from MOCK_DATA
console.groupCollapsed(`Straight Search Test - ${numberOfTests + 4} tests`);
for (let i = 0; i < numberOfTests; i++) {
  randomIndex = Math.floor(Math.random() * (MOCK_DATA.length - 1));
  gotCorrectResult(MOCK_DATA[randomIndex].sku, MOCK_DATA[randomIndex], straightSearch, i);
}
// incorrect + not formatted sku
gotCorrectResult(someTestingStr[0], null, straightSearch, numberOfTests);
gotCorrectResult(someTestingStr[1], null, straightSearch, numberOfTests + 1);
gotCorrectResult(someTestingStr[2], null, straightSearch, numberOfTests + 2);
gotCorrectResult(someTestingStr[3], MOCK_DATA[0], straightSearch, numberOfTests + 3); 

console.groupEnd(`Straight Search Test - ${numberOfTests + 4} tests`);



//BINARY SEARCH TESTING

//Test binary search with random skus taken from SORTED_MOCK_DATA
console.groupCollapsed(`Binary Search Test - ${numberOfTests + 4} tests`);
for (let i = 0; i < numberOfTests; i++) {
  randomIndex = Math.floor(Math.random() * (SORTED_MOCK_DATA.length - 1));
  gotCorrectResult(SORTED_MOCK_DATA[randomIndex].sku, SORTED_MOCK_DATA[randomIndex], binarySearch, i);
}

// incorrect + not formatted sku
gotCorrectResult(someTestingStr[0], null, binarySearch, numberOfTests);
gotCorrectResult(someTestingStr[1], null, binarySearch, numberOfTests + 1);
gotCorrectResult(someTestingStr[2], null, binarySearch, numberOfTests + 2);
gotCorrectResult(someTestingStr[3], MOCK_DATA[0], binarySearch, numberOfTests + 3);

console.groupEnd(`Binary Search Test - ${numberOfTests + 4} tests`);
//////////////////////////////////////////////////////////////////////////////////////////////

// EVENT LISTENER
document.body.addEventListener('click', handler);
let input = document.querySelector('.form__sku-input');
input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); //prevent the form from submitting and page reloading
    //could later be added that on enter, script will search for the sku and display the result
    //with any of the methods implemented (maybe random selection or maybe one method set by default)
  }
  return;
});
