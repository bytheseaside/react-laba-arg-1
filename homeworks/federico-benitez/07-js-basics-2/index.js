/**
 * Exercise 1
 * https://www.codewars.com/kata/5715eaedb436cf5606000381
 */
function positiveSum(arr) {
  return arr.reduce((prev, curr) => {
    if (curr > 0) {
      return prev + curr;
    }
    return prev + 0;
  }, 0);
}

/**
 * Exercise 2
 * https://www.codewars.com/kata/5a3e1319b6486ac96f000049
 */
function pairs(arr) {
  let count = 0;
  arr.reduce((prev, curr, currIndex) => {
    if (currIndex > 0 && currIndex % 2 !== 0) {
      if (prev === curr - 1 || prev === curr + 1) {
        count++;
      }
    }
    return curr;
  }, 0);

  return count;
}

/**
 * Exercise 3
 * https://www.codewars.com/kata/5aba780a6a176b029800041c
 */

/**
 * Exercise 4
 * https://www.codewars.com/kata/514a6336889283a3d2000001
 */
function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  return numbersArray.filter((num) => num % 2 === 0);
}

/**
 * Exercise 5
 * https://www.codewars.com/kata/5a090c4e697598d0b9000004
 */
function solve(arr) {
  arr.sort((n1, n2) => n1 - n2);
  return [...Array(arr.length)].map((_, index) => {
    if (index % 2) {
      return arr.shift();
    } else {
      return arr.pop();
    }
  });
}
/**
 * Exercise 6
 * https://www.codewars.com/kata/566044325f8fddc1c000002c
 */

function evenChars(string) {
  if (string.length < 2 || string.length > 100) return 'invalid string';

  return string.split('').filter((_, i) => i % 2);
}

/**
 * Exercise 7
 * https://www.codewars.com/kata/545a4c5a61aa4c6916000755
 */

function gimme(triplet) {
  const middle = [...triplet].sort((n1, n2) => n1 - n2)[1];
  return triplet.findIndex((n) => n === middle);
}

/**
 * Exercise 8
 * https://www.codewars.com/kata/578553c3a1b8d5c40300037c
 */

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(''), 2);
};

/**
 * Exercise 9
 * https://www.codewars.com/kata/585d7d5adb20cf33cb000235
 */

function findUniq(arr) {
  arr = arr.sort();
  if (arr[0] === arr[1]) {
    return arr[arr.length - 1];
  } else {
    return arr[0];
  }
}
/**
 * Exercise 10
 * https://www.codewars.com/kata/581e014b55f2c52bb00000f8
 */
function decipherThis(str) {
  const words = str.split(' ');

  return words
    .map((word) => {
      const firstChar = String.fromCharCode(
        word
          .split('')
          .filter((char) => !isNaN(char))
          .join(''),
      );
      const chars = word
        .split('')
        .filter((char) => isNaN(char))
        .join('');

      if (!chars) {
        return firstChar;
      }

      if (chars.length === 1) return `${firstChar}${chars}`;

      const newChars = `${chars[chars.length - 1]}${chars.slice(1, chars.length - 1)}${chars[0]}`;
      return `${firstChar}${newChars}`;
    })
    .join(' ');
}
/**
 * Exercise 11
 * https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
 */
