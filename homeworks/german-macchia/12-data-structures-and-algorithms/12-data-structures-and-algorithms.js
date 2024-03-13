const mockData = require("./MOCK_DATA.js");
const fs = require("fs");
const needleList = [
  "d462bb76-81ee-46af-9fdb-ebfe53a93d3f",
  "6df55f86-e3f5-4d7b-9cd5-906d8d7e804a",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "be77abf7-29b0-4ed1-9379-f5d7576cb5ce",
  "3c511860-d159-457d-8374-e8205904e6f5",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "9c4a0320-1d82-4a46-83b3-511ddffb7ee6",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "e04b6074-332f-4661-8f3a-4cdcb3adfb6a",
  "be77abf7-29b0-4ed1-9379-f5d7576cb5ce",
  "3c511860-d159-457d-8374-e8205904e6f5",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
  "d462bb76-81ee-46af-9fdb-ebfe53a93d3f",
  "6df55f86-e3f5-4d7b-9cd5-906d8d7e804a",
  "1e63459f-0b18-4acf-9afc-e7287347bbeb",
];

function quickSort(arr) {
  if (arr.length < 1) {
    return [];
  }

  let lessThan = [];
  let moreThan = [];
  let pivot = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].sku < pivot.sku) lessThan.push(arr[i]);
    else if (arr[i].sku > pivot.sku) moreThan.push(arr[i]);
  }
  return [].concat(quickSort(lessThan), pivot, quickSort(moreThan));
}

function straightSearch(arr, sku) {
  let i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].sku === sku) break;
  }
  return i;
}

function binarySearch(arr, sku) {
  let lowest = 0;
  let highest = arr.length - 1;
  let middle;

  while (lowest <= highest) {
    middle = Math.floor((lowest + highest) / 2);
    if (arr[middle].sku === sku) return middle;
    else if (arr[middle].sku < sku) lowest = middle + 1;
    else highest = middle - 1;
  }
  return -1;
}

function jumpSearch(arr, sku) {
  let len = arr.length;
  let step = Math.floor(Math.sqrt(len));
  let blockStart = 0;
  let currentStep = step;
  //we jump till we find that element in currentStep index is greater that target
  while (arr[Math.min(currentStep, len) - 1].sku < sku) {
    //in the meantime we are assigning the value of the currentStep to blockStart
    //so when the loop is over we can work with this variable
    blockStart = currentStep;
    currentStep += step;
    //if we jump till the end of the array it means that the value is greather
    //than any of the ones we have in arr so it returns -1
    if (blockStart >= len) return -1;
  }
  //implement a linear search in the block defined by the last loop
  while (arr[blockStart].sku < sku) {
    blockStart++;
    //if blockStart equals the currentStep or last index of array something went wrong and returns -1
    if (blockStart === Math.min(currentStep, len)) return -1;
  }
  //if the last loop stopped we verify that the element its indeed the target
  if (arr[blockStart].sku === sku) return blockStart;
  else return -1;
}

function test() {
  const append = () => {
    console.log(str);
    fs.appendFile("./result.log", str, (err) => {
      if (err) console.error(err);
    });
  };

  let date = new Date().toISOString();
  let str = `\n......................................
${date}\n......................................
Tests Results:\n......................................\n`;
  let t0, t1, data;
  append();

  //SORTING DATA
  t0 = performance.now();
  data = quickSort(mockData);
  t1 = performance.now();
  str = `Quick Sort: ${t1 - t0} ms\n`;
  append();

  //BINARY SEARCH
  t0 = performance.now();
  for (let sku of needleList) {
    binarySearch(data, sku);
  }
  t1 = performance.now();
  str = `Binary Search: ${t1 - t0} ms\n`;
  append();

  //STRAIGHT SEARCH
  t0 = performance.now();
  for (let sku of needleList) {
    straightSearch(data, sku);
  }
  t1 = performance.now();
  str = `Straight Search: ${t1 - t0} ms\n`;
  append();

  //JUMP SEARCH
  t0 = performance.now();
  for (let sku of needleList) {
    jumpSearch(data, sku);
  }
  t1 = performance.now();
  str = `Jump Search: ${t1 - t0} ms\n`;
  append();
}

test();
