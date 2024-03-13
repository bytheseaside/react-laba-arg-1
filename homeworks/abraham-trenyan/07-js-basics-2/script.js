// Kata 1: https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
function positiveSum(arr) {
  let sum = 0;
  arr.forEach((number) => {
    if (number > 0) {
      sum += number;
    }
  });
  return sum;
}
// Kata 2: https://www.codewars.com/kata/5a3e1319b6486ac96f000049/train/javascript
function pairs(ar) {
  let count = 0;
  for (i = 0; i < ar.length; i += 2) {
    if (ar[i] - 1 === ar[i + 1] || ar[i] + 1 === ar[i + 1]) {
      count++;
    }
  }
  return count;
}
// Kata 3: https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript
function maxMultiple(divisor, bound) {
  let largestInt = null;
  for (i = 1; i <= bound; i++) {
    if (i % divisor == 0) {
      largestInt = i;
    }
  }
  return largestInt;
}
// Kata 4: https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript
let fiteredArray = [];
function getEvenNumbers(numbersArray) {
  filteredArray = numbersArray.filter((n) => n % 2 == 0);
  return filteredArray;
}
// Kata 5: https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  let newArray = [];
  let l = arr.length;
  for (i = 0; i <= l; i++) {
    let maximum = Math.max(...arr);
    let minimum = Math.min(...arr);
    newArray.push(maximum, minimum);
    arr.splice(arr.indexOf(maximum), 1);
    arr.splice(arr.indexOf(minimum), 1);
  }
  newArray.push(...arr);
  return newArray;
}
// Kata 6: https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
function evenChars(string) {
  let evenCharacters = [];
  if (string.length > 100 || string.length < 2) {
    return 'invalid string';
  } else {
    for (i = 0; i < string.length; i++) {
      if (i % 2 != 0) evenCharacters.push(string[i]);
    }
    return evenCharacters;
  }
}
// Kata 7: https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
function gimme(triplet) {
  let sortedArr = [...triplet].sort(function (a, b) {
    return a - b;
  });
  return triplet.indexOf(sortedArr[1]);
}
// Kata 8: https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  let sum = 0;
  let reversedArr = arr.reverse(); // Reverts the order so it can take it to the power of the normal
  for (i = 0; i < reversedArr.length; i++) {
    // index, instead of counting indexes backwards as in this method
    if (arr[i] == 1) {
      sum += Math.pow(2, i);
    }
  }
  return sum;
};

// Kata 9: https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      return arr[i];
    }
  }
}
// Kata 10: https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript
function decipherThis(str) {}
// Kata 11: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j] && arr[j] % 2 != 0) {
          let aux = arr[j];
          arr[j] = arr[i];
          arr[i] = aux;
          console.log(arr);
        }
      }
    }
  }
  return arr;
}

//Optional 1: https://www.codewars.com/kata/515bb423de843ea99400000a
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage) {}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function () {};

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {};

// Optional 2: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
function moveZeros(arr) {
  return;
}
// Optional 3: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript
function findUniq(arr) {}
//  Optional 4: https://www.codewars.com/kata/5296bc77afba8baa690002d7/train/javascript
function sudoku(puzzle) {}
