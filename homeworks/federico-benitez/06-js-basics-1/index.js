/**
 * Exercise 1 - Opposite number
 * http://www.codewars.com/kata/opposite-number
 */

function opposite(number) {
  return number * -1;
}

/**
 * Exercise 2 - Basic Mathematical Operations
 * http://www.codewars.com/kata/basic-mathematical-operations
 */

function basicOp(operation, a, b) {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      throw new Error(`Operator ${operation} not implemented `);
  }
}

/**
 * Exercise 3 - Printing Array elements with Comma delimiters
 * https://www.codewars.com/kata/printing-array-elements-with-comma-delimiters
 */

function printArray(array) {
  return array.join(',');
}

/**
 * Exercise 4 - Transportation on vacation
 * https://www.codewars.com/kata/transportation-on-vacation
 */

function rentalCarCost(days) {
  const COST_PER_DAY = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;

  let price = days * COST_PER_DAY;

  if (days >= 3 && days < 7) price -= SMALL_DISCOUNT;

  if (days >= 7) price -= BIG_DISCOUNT;

  return price;
}

/**
 * Exercise 5 - Calculating with functions
 * http://www.codewars.com/kata/calculating-with-functions
 */

function zero(operation) {
  return getResult(operation, 0);
}
function one(operation) {
  return getResult(operation, 1);
}
function two(operation) {
  return getResult(operation, 2);
}
function three(operation) {
  return getResult(operation, 3);
}
function four(operation) {
  return getResult(operation, 4);
}

function five(operation) {
  return getResult(operation, 5);
}

function six(operation) {
  return getResult(operation, 6);
}

function seven(operation) {
  return getResult(operation, 7);
}

function eight(operation) {
  return getResult(operation, 8);
}
function nine(operation) {
  return getResult(operation, 9);
}

function plus(value) {
  return value;
}
function minus(value) {
  return value * -1;
}
function times(value) {
  return [...Array(value)].map(() => value);
}
function dividedBy(value) {
  return times(value).map((n) => n * -1);
}

function getResult(operation, VALUE) {
  if (!operation) return VALUE;

  if (Array.isArray(operation)) {
    if (operation[0] < 0) {
      return divide(operation, VALUE);
    }
    return multiply(operation, VALUE);
  } else {
    return VALUE + operation;
  }
}

function divide(array, initial) {
  let result = 0;
  let operator = initial;

  while (operator > array[0]) {
    if (operator < array[0] * -1) break;
    operator = operator + array[0];
    result++;
  }
  return result;
}

function multiply(array, value) {
  return value * array.length;
}

/**
 * Exercise 6
 * https://www.codewars.com/kata/get-the-middle-character
 */

function getMiddle(s) {
  if (s.length % 2 === 1) return s[Math.floor(s.length / 2)];

  const middle = s.length / 2;
  return `${s[middle - 1]}${s[middle]}`;
}

/**
 * Exercise 7
 * http://www.codewars.com/kata/partition-on
 */
function partitionOn(pred, items) {
  const truthies = items.filter((el) => pred(el));
  const falsies = items.filter((el) => !pred(el));
  items.splice(0, items.length, ...falsies, ...truthies);
  return falsies.length;
}

/**
 * Exercise 8
 * https://www.codewars.com/kata/word-count
 * TODO: resolve
 */

/* ----- 404 not found ---- */

/**
 * Exercise 9 - Find the odd int
 * https://www.codewars.com/kata/find-the-odd-int/
 */
function findOdd(A) {
  //happy coding!
  for (let n of A) {
    const count = A.filter((num) => num === n).length;
    if (count % 2 !== 0) return n;
  }
}

/**
 * Exercise 10
 * https://www.codewars.com/kata/find-the-parity-outlier
 */

function findOutlier(integers) {
  const evens = integers.filter((n) => n % 2 === 0);
  const odds = integers.filter((n) => n % 2 !== 0);

  if (evens.length === 1) return evens[0];

  return odds[0];
}

/**
 * Exercise 11 - zipWith
 * https://www.codewars.com/kata/zipwith
 */

function zipWith(fn, a0, a1) {
  const shorter = a0.length < a1.length ? a0 : a1;

  return shorter.map((_, i) => fn(a0[i], a1[i]));
}

/**
 * Exercise 12 Filter the number
 * https://www.codewars.com/kata/filter-the-number
 */

function FilterString(value) {
  return Number(
    value
      .split('')
      .filter((v) => !isNaN(v))
      .join(''),
  );
}

/**
 * Exercise 13 - n-th Fibonacci
 * https://www.codewars.com/kata/n-th-fibonacci
 */

function nthFibo(n) {
  // Return the n-th number in the Fibonacci Sequence
  const fib = [0, 1];

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib[n - 1];
}

/**
 * Exercise 14 - Cat and Mouse - 2D Version
 * https://www.codewars.com/kata/cat-and-mouse-2d-version/
 */
function catMouse(map, moves) {
  const split = map.split('\n');
  const nmap = split.map((el) => [...el]);
  let cat = -1,
    mouse = -1;

  for (let i = 0; i < nmap.length; ++i) {
    for (let j = 0; j < nmap[0].length; ++j) {
      if (nmap[i][j] === 'C') cat = [j, i];
      if (nmap[i][j] === 'm') mouse = [j, i];
    }
  }
  if (mouse === -1 || cat === -1) return 'boring without two animals';
  if (Math.abs(cat[0] - mouse[0]) + Math.abs(cat[1] - mouse[1]) <= moves) return 'Caught!';

  return 'Escaped!';
}
/**
 * Exercise 15 - Duplicate Encoder
 * https://www.codewars.com/kata/duplicate-encoder
 */
function duplicateEncode(word) {
  const wordLower = word.toLowerCase();

  let result = '';

  for (const char of wordLower) {
    const startIndex = wordLower.indexOf(char);
    const endIndex = wordLower.lastIndexOf(char);

    if (startIndex === endIndex) {
      result += '(';
    } else {
      result += ')';
    }
  }

  return result;
}

/**
 * Exercise 16 - Additive Numbers
 * https://www.codewars.com/kata/5693239fb761dc8670000001
 */

/**
 * Exercise 17 - Build Tower
 * https://www.codewars.com/kata/576757b1df89ecf5bd00073b
 */
function towerBuilder(nFloors) {
  let result = [];
  for (i = 1; i <= nFloors; i++) {
    const space = ' '.repeat(nFloors - i);
    const star = '*'.repeat(2 * i - 1);
    result.push(`${space}${star}${space}`);
  }
  return result;
}

/**
 * Exercise 18 - Mexican Wave
 * https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
 */

function wave(str) {
  // Code here
  let result = [];
  if (str === '') return result;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') continue;
    result.push(setCharAt(str, i, str[i].toUpperCase()));
  }

  return result;
}

function setCharAt(str, index, char) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + char + str.substring(index + 1);
}

/**
 * Exercise 19 - String Breakers
 * https://www.codewars.com/kata/59d398bb86a6fdf100000031
 */
function stringBreakers(n, string) {
  let result = [];
  let stringWithoutSpaces = string.replace(/\s/g, '');

  for (let i = 0; i < stringWithoutSpaces.length; i += n) {
    result.push(stringWithoutSpaces.substr(i, n));
  }
  return result.join('\n');
}

/**
 * Exercise 20 - Extract the domain name from a URL
 *  https://www.codewars.com/kata/514a024011ea4fb54200004b
 */
function domainName(url) {
  if (url.includes('www')) {
    return url.split('.')[1];
  }

  if (url.includes('//')) {
    const parts = url.split('//');
    return parts[1].split('.')[0];
  }

  return url.split('.')[0];
}
