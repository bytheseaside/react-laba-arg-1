let mockData = require('./MOCK_DATA.JS');
function bubbleSort(arr) {
  //Bubble sorts mockData alphabetically by sku values, so now we can implement binary search
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].sku > arr[j].sku) {
        let aux = arr[j];
        arr[j] = arr[i];
        arr[i] = aux;
      }
    }
  }
}
function straightSearch(arr, target) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].sku === target) {
      return arr[j];
    }
  }
  return 'Target was not found';
}

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (arr[middle].sku === target) {
      return arr[middle];
    }
    if (arr[middle].sku > target) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return 'Target was not found';
}
bubbleSort(mockData);

// Tests
/* console.log(binarySearch(mockData, 'ccdb70f4-91f1-4543-93fa-8a93f980dc99'));
console.log(straightSearch(mockData, 'ccdb70f4-91f1-4543-93fa-8a93f980dc99'));
console.log(binarySearch(mockData, 'not a sku'));
console.log(straightSearch(mockData, 'not a sku')); */

// Performance Tests -- Binary Search
console.time('Binary Search test - Finding first object');
binarySearch(mockData, 'ccdb70f4-91f1-4543-93fa-8a93f980dc99');
console.timeEnd('Binary Search test - Finding first object');
console.time('Binary Search test - Finding 37th object');
binarySearch(mockData, '83049f0c-1aba-49ad-86e1-4f9b663e24c4');
console.timeEnd('Binary Search test - Finding 37th object');
// Straight Search
console.time('Straight Search test - Finding first object');
straightSearch(mockData, 'ccdb70f4-91f1-4543-93fa-8a93f980dc99');
console.timeEnd('Straight Search test - Finding first object');
console.time('Straight Search test - Finding 37th object');
straightSearch(mockData, '83049f0c-1aba-49ad-86e1-4f9b663e24c4');
console.timeEnd('Straight Search test - Finding 37th object');
// Bubble Sort
console.time('Bubble sort test');
bubbleSort(mockData);
console.timeEnd('Bubble sort test');
