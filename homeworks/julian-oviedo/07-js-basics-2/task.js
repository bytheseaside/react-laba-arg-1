// KATA 1 https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result += arr[i];
    }
  }
  return result;
}

// KATA 2  https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let count = 0;
  for (let i = 0; i < ar.length; i = i + 2) {
    if (Math.abs(ar[i] - ar[i + 1]) === 1) {
      count += 1;
    }
  }
  return count;
}

// KATA 3 https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

// KATA 4 https://www.codewars.com/kata/514a6336889283a3d2000001

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((x) => x % 2 == 0);
}

//KATA 5 https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  let newArr = [];
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      let max = Math.max(...arr);
      let indexMax = arr.indexOf(max);

      newArr.push(max);
      arr.splice(indexMax, 1);
    }
    if (i % 2 !== 0) {
      let min = Math.min(...arr);
      let indexMin = arr.indexOf(min);

      newArr.push(min);
      arr.splice(indexMin, 1);
    }
  }

  return newArr;
}

//KATA 6 https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  let result = [];
  let arr = string.split('');
  if (2 <= string.length && 100 >= string.length) {
    for (i = 1; i < arr.length; i = i + 2) {
      result.push(arr[i]);
    }
  } else {
    return 'invalid string';
  }
  return result;
}

//KATA 7 https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(t) {
  const max = Math.max(...t);
  const min = Math.min(...t);
  const middle = 3 - t.indexOf(max) - t.indexOf(min);
  return middle;
}

//KATA 8 https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  arr.reverse();
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      result += Math.pow(2, i);
    }
  }
  return result;
};

//KATA 9 https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  if (arr.filter((x) => x !== min).length <= 1) {
    return max;
  } else {
    return min;
  }
}

//KATA 10 https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  let arr = str.split(' ');
  let result = [];
  arr.forEach((e) => {
    result.push(e.replace(/\d+/, (char) => String.fromCharCode(char)).replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2'));
  });
  return result.join(' ');
}

//KATA 11 https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  indexs = [];
  array
    .filter((v, i) => v % 2 && indexs.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => (array[indexs[i]] = v));

  return array;
}

// OPTIONAL ADVANCED KATAS  !! //

// 2. https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  for (a of arr) {
    if (a === 0) {
      arr.push(arr.splice(arr.indexOf(0), 1)[0]);
    }
  }
  return arr;
}
