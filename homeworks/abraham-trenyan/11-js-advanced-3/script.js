// 1: https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
function validateMessage(msg) {
  if (/(<([^>]+)>)/i.test(msg)) {
    return false;
  }
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg != 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  return true;
}
//2 https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript
async function sayJoke(apiUrl, jokeId) {
  let response = await fetch(apiUrl);
  let jsonResponse = await response.json();
  if (!jsonResponse.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }
  const joke = jsonResponse.jokes.find((joke) => joke.id === jokeId);
  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }
  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}
// 3. setTimeout/setInterval
let seconds = 0;
function countElapsedTime() {
  console.log(`Elapsed time: ${seconds} sec`);
  seconds++;
  if (seconds > 5) {
    clearInterval(chronometer);
  }
}
let chronometer = setInterval(countElapsedTime, 1000);
// 6. Digit or not
function checkDigit(str) {
  if (str[0].match(/^\d+$/)) {
    console.log('the first character is a digit');
  } else {
    console.log('first character is not a digit');
  }
}
