// Kata 1 - Error Throwing - Error Handling #2 https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript

const validateMessage = (msg) => {
  //checks if the message is "empty"
  if (msg == null) {
    throw new ReferenceError('Message is null!');
    //Checks if the message is a string
  } else if (typeof msg != 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
    // Checks if the message length is equal to 0 or over 255
  } else if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
    // Checks if the message contains HTML-tag ( "<" or ">")
  } else if (msg.includes('<') && msg.includes('>')) {
    return false;
  }
  // Returns true at the end, if it's a valid string.
  return true;
};

// Kata 2 - Jokes you've been 'awaiting' for ... promise https://www.codewars.com/kata/5a353a478f27f244a1000076

/* async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find((object) => object.id === jokeId);

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  function saySetup() {
    return joke.setup
  }
  
  function sayPunchLine() {
    return joke.punchLine
  }
  
  return {
    saySetup,
    sayPunchLine
  }
} */

// Task 6 - Digit or not

let startsWithLetter = 'String starts with a letter!';
let startsWithDigit = 'String starts with a digit!';

function testString(string) {
  //The function takes a string as a parameter and checks if it starts with a digit
  if (/^\d/.test(string)) {
    //Depending in the outcome, it returns the variables declared above
    return startsWithDigit;
  } else {
    return startsWithLetter;
  }
}
// Tests
console.log(testString('Does this string start with a letter?')); // Expected: 'String starts with a letter!'
console.log(testString('2Does this string start with a digit?')); // Expected: 'String starts with a digit!'

// Task 7 - Argentinian phone nomber validator

function argentinianPhoneNumber(phoneNumber) {
  if (/^[+]*54[\s-]*(\d{3}[\s-]*\d{4}[\s-]*\d{3})$/.test(phoneNumber)) {
    return 'This phone number is from Argentina';
  } else {
    return 'This phone number is not from Argentina';
  }
}

console.log(argentinianPhoneNumber('+54 116-2589-612'));
console.log(argentinianPhoneNumber('+541162589612'));
console.log(argentinianPhoneNumber('541162589612'));
console.log(argentinianPhoneNumber('+380-611-055-561'));
// /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
