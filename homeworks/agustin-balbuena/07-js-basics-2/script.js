// 1 -> https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  let sum = 0;
  arr.map((element) => {
    if (element > 0) {
      sum += element;
    }
  });
  return sum;
}

// 2 -> https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let sequence = 0;
  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] === ar[i + 1] + 1 || ar[i] === ar[i + 1] - 1) {
      sequence++;
    }
  }
  return sequence;
}

// 3 -> https://www.codewars.com/kata/5aba780a6a176b029800041c
function maxMultiple(divisor, bound) {
  let result;
  for (let i = bound; i <= bound; i--) {
    if (i == 0 || i == divisor) {
      break;
    }

    if (i % divisor == 0) {
      result = i;
      break;
    }
  }
  return result;
}

// 4 -> https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((n) => n % 2 == 0);
}

// 5 -> https://www.codewars.com/kata/5a090c4e697598d0b9000004
function solve(arr) {
  let res = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      let max = Math.max(...arr);
      arr.splice(arr.indexOf(max), 1);
      res.push(max);
    } else {
      let min = Math.min(...arr);
      arr.splice(arr.indexOf(min), 1);
      res.push(min);
    }
  }
  return res;
}

// 6 -> https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return 'invalid string';
  }

  let newString = '';
  for (let i = 1; i < string.length; i += 2) {
    newString += string[i];
  }

  return newString.split('');
}

// 7 -> https://www.codewars.com/kata/545a4c5a61aa4c6916000755
function gimme(triplet) {
  newTriplet = [...triplet];
  let middle = triplet.sort((a, b) => a - b)[1];
  return newTriplet.indexOf(middle);
}

// 8 -> https://www.codewars.com/kata/578553c3a1b8d5c40300037c
const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2);
};

// 9 -> https://www.codewars.com/kata/585d7d5adb20cf33cb000235
function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      if (arr[i + 1] !== arr[i + 2]) {
        return arr[i + 1];
      } else {
        return arr[i];
      }
    }
  }
}

// 10 -> https://www.codewars.com/kata/581e014b55f2c52bb00000f8
function decipherThis(str) {
  let arr = str.split(' ');
  let result = [];
  arr.forEach((e) => {
    result.push(e.replace(/\d+/, (char) => String.fromCharCode(char)).replace(/^(.)(.)(.*)(.)$/, '$1$4$3$2'));
  });
  return result.join(' ');
}

// 11 -> https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const oddArr = [];
  const evenArr = [];
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      evenArr.push(array[i]);
    } else {
      oddArr.push(array[i]);
    }
  }
  oddArr.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0) {
      result.push(evenArr.shift());
    } else {
      result.push(oddArr.shift());
    }
  }
  return result;
}
