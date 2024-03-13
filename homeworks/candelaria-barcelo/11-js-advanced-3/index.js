// task 1 https://www.codewars.com/kata/55e7650c8d894146be000095/javascript
function validateMessage(msg) {
  if (msg === null) throw ReferenceError('Message is null!');
  if (typeof msg !== 'string') throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  if (msg.length > 255 || msg.length === 0) throw RangeError(`Message contains ${msg.length} characters!`);
  if (msg.includes('<') && msg.includes('>')) return false;
  return true;
}

// task 2 https://www.codewars.com/kata/5a353a478f27f244a1000076
async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const json = await response.json();
  const jokes = await json.jokes;
  if (jokes === undefined) throw Error(`No jokes at url: ${apiUrl}`);
  const joke = await jokes.filter((jk) => jk.id === jokeId);
  if (joke == false) throw Error(`No jokes found id: ${jokeId}`);
  return joke[0];
}

Object.prototype.saySetup = function () {
  return this.setup;
};
Object.prototype.sayPunchLine = function () {
  return this.punchLine;
};

// task 3 setTimeout/setInterval
let i = 1;
let timePassed = setInterval(() => {
  console.log(`Elapsed time: ${i} sec`);
  i++;
}, 1000);
setTimeout(() => {
  clearInterval(timePassed);
}, 5000);

// task 5 Fetch API/XMLHttpRequest
// !!!
// TASK 5 IS INSIDE THE "TASK-5" DIRECTORY
// !!!

// task 6 Digit or not
const regexChecker = (str) => {
  if (str.match(/^\d/)) return true;
  return false;
};
