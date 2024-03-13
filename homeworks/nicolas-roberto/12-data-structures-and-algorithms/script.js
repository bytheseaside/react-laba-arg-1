const needleList = [
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  '9c4a0320-1d82-4a46-83b3-511ddffb7ee6',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'e04b6074-332f-4661-8f3a-4cdcb3adfb6a',
  'be77abf7-29b0-4ed1-9379-f5d7576cb5ce',
  '3c511860-d159-457d-8374-e8205904e6f5',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
  'd462bb76-81ee-46af-9fdb-ebfe53a93d3f',
  '6df55f86-e3f5-4d7b-9cd5-906d8d7e804a',
  '1e63459f-0b18-4acf-9afc-e7287347bbeb',
];

//Imported the data from MOCK_DATA file
const data = require('./MOCK_DATA');
//We use the require() method, to include the File System module
let fs = require('fs');
let util = require('util');
//The util method returns a formatted string using the first argument
// 'a' will push every test in the same file, 'w' flag would make a new file on each script run
let logFile = fs.createWriteStream(__dirname + '/result.log', { flags: 'a' });
let logStdout = process.stdout;

console.log = function (d) {
  // the logfire will create a new file, which will write the returned string
  logFile.write(util.format(d) + '\n');
  // process.stdout allows to "console.log" multiple lines, and needs a break line in the end.
  logStdout.write(util.format(d) + '\n');
};

//////////////////
//  LINEAR SEARCH
//Linear search
// The linear search starts from the index zero and when it reaches the desired
//Element (sku) it will return the found index
function linearSearch(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].sku === id) {
      return data[i];
    }
  }
}

console.log('Linear test:');
//The variables with "performance.now()" creates an interval in miliseconds between the to variables
let startLinearPerformance = performance.now();
console.log(linearSearch(data, '9f8ce6ce-bdc3-4b59-afa0-d9e9c9f65898'));
let endLinearPerformance = performance.now();
console.log('Time elapsed:');
//Once the last performance.now is run, we can calculate the performance time of the linear search
console.log(endLinearPerformance - startLinearPerformance);

/////////////////
// BINARY SEARCH
//First, we need to sort the given data. For this, we use ".sort"
const dataSort = data.sort((a, b) => (a.sku > b.sku ? 1 : -1));

function binarySearch(array, id) {
  //For this binary search, we need a value for the index start and last index
  let start = 0;
  let end = array.length - 1;
  //While the start index value is less or equal to the last index value
  while (start <= end) {
    //We need a variable with the value of the middle index
    const midIndex = Math.floor((start + end) / 2);
    //With this middle index, we can now work in the binarySeach, which will divide the given object in 2
    //and depending on the value of the element that we're searching for, it will calculate if it's lower
    //or higher than the middle index. If it's equal (the middle index) it will return it.
    const center = array[midIndex];
    if (id === center.sku) {
      return center;
    }
    //If the sku value is lower to the id
    if (id > center.sku) {
      //The start value will be equals the mid index +1
      start = midIndex + 1;
    }
    if (id < center.sku) {
      //And if it's lower, it will -1
      end = midIndex - 1;
    }
  }
}
console.log('Binary test:');
let startBinaryPerformance = performance.now();
console.log(binarySearch(dataSort, '9f8ce6ce-bdc3-4b59-afa0-d9e9c9f65898'));
let endBinaryPerformance = performance.now();
console.log('Time elapsed:');
//When the last performance.now is run, we can calculate the performance time of the binary search
console.log(endBinaryPerformance - startBinaryPerformance);
