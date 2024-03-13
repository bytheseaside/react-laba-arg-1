//Task 1) => https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(array) {
  return array.reduce(
    (accumulator, current) => accumulator + (current > 0 ? current : 0),
    0
  );
}
console.log(positiveSum([1, -4, 7, 12]));

//Tak 2) => https://www.codewars.com/kata/5a3e1319b6486ac96f000049

function pairs(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0 && Math.abs(arr[i] - arr[i - 1]) === 1) {
      counter++;
    }
  }

  return counter;
}
console.log(pairs([1, 2, 4, 3]));

//Task 3) =>https://www.codewars.com/kata/5aba780a6a176b029800041c

const maxMultiple = (divisor, bound) => {
  return Math.floor(bound / divisor) * divisor;
};
console.log(maxMultiple(37, 200));

// Task 4) => https://www.codewars.com/kata/514a6336889283a3d2000001

const getEvenNumbers = array => array.filter(word => word % 2 === 0);
console.log(getEvenNumbers([2, 4, 5, 6]));

// Task 5) => https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  let sorted = arr.sort((a, b) => a - b);
  let res = [];

  while (sorted.length > 1) {
    res.push(sorted.pop(), sorted.shift())
  }
  return res.concat(sorted);
};
console.log(solve([15, 11, 10, 7, 12]))

//Task 6) => https://www.codewars.com/kata/566044325f8fddc1c000002c

let evenChars = (string) => {
  if (string.length < 2 || string.length > 100) return "invalid string";
  let result = [];
  const stringToArray = string.split("");
  const mapArray = stringToArray.map(
    (char, i) => (i + 1) % 2 === 0 && result.push(char)
  );
  return result;
};
console.log(evenChars("a"));

// Task 7) => https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme(array) {
  let copyArray = [...array];
  let sorted = array.sort((a, b) => a - b);
  return copyArray.indexOf(sorted[1]);
}
console.log(gimme([2, 3, 1]));

//Task 8) => https://www.codewars.com/kata/578553c3a1b8d5c40300037c

function binaryEquivalent(array) {
  const binaryValue = parseInt(array.join(""), 2);
  return binaryValue;
}
console.log(binaryEquivalent([0, 1, 0, 0]));

//Task 9) => https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  let result = 0;
  arr.forEach((element) => {
    if (arr.indexOf(element) === arr.lastIndexOf(element)) {
      result = element
    }
  });
  return result;
}

findUniq([1, 0, 0])

//Task 10 => https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  return str
    .split(' ')
    .map(function (word) {
      let charCode = word.match(/\d+/)[0];
      let firstLetter = String.fromCharCode(charCode);
      word = word.replace(charCode, firstLetter);
      let restOfWord = word.slice(1);

      if (word.length < 3) {
        return firstLetter + restOfWord;
      } else {
        let secondLetter = word[word.length - 1];
        let lastLetter = word[1];

        let middle = word.slice(2, -1);

        return firstLetter + secondLetter + middle + lastLetter;
      }
    }
    ).join(' ');
}
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));

//Task 11) => https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

function sortArray(array) {
  const filteredOdd = array
    .filter(num => num % 2 !== 0)
    .sort((a, b) => a - b);

  const mapArray = array.map((num) => {
    if (num % 2 === 0) {
      return num;
    } else {
      return filteredOdd.shift();
    }
  });
  return mapArray;
}
console.log(sortArray([5, 3, 2, 8, 1, 4]));

//Optional Advanced

//Task 2) => https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(array) {
  const arrWithoutZeros = array.filter(function (num) {
    return num !== 0;
  });
  const zeros = array.filter(function (num) {
    return num === 0;
  });

  return arrWithoutZeros.concat(zeros);
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));



