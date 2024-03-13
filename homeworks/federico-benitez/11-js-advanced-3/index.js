/**
 * Exercise 1
 * https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
 */
function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg !== 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.length <= 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  const htmlRegEx = /(< ?[a-z]+ ?>)/i;
  return !msg.match(htmlRegEx);
}

/**
 * Exercise 2
 * https://www.codewars.com/kata/5a353a478f27f244a1000076
 */
class Joke {
  constructor(joke) {
    this.joke = joke;
  }

  saySetup() {
    return this.joke.setup;
  }
  sayPunchLine() {
    return this.joke.punchLine;
  }
}
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  if (!data.hasOwnProperty('jokes')) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find((joke) => joke.id === jokeId);

  if (!joke) throw new Error(`No jokes found id: ${jokeId}`);

  return new Joke(joke);
}

/**
 * Exercise 3
 */

function displayTime() {
  let time = 0;

  const timer = setInterval(() => {
    time++;
    console.log(`Elapsed time ${time}sec`);
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
  }, 6000);
}

//6. Digit or not
function isFirstCharNum(str) {
  const pattern = new RegExp(/^\d/);
  return !!str.match(pattern);
}
