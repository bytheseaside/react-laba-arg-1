// Task 1) => https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript

const validateMessage = (msg) => {
  if (msg == null) throw new ReferenceError("Message is null!");

  if (typeof msg != "string")
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );

  if (msg.length === 0 || msg.length >= 264)
    throw new RangeError(`Message contains ${msg.length} characters!`);

  if (msg.match(/(< ?[a-z]+ ?>)/i)) return false;

  return true;
};
console.log(validateMessage("<img>"));

// Task 2) => https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find((obj) => obj.id === jokeId);

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup: function () {
      return joke.setup;
    },
    sayPunchLine: function () {
      return joke.punchLine;
    },
  };
}

//Task 3) setTimeout/ setInterval

let count = 0;

const interval = () => {
  if (count >= 5) {
    clearInterval(displayInterval);
  } else {
    count++;
    console.log(`Elapsed time: ${count} sec`);
  }
}
const displayInterval = setInterval(interval, 1000);

//Task 5) Fetch API/XMLHttpRequest in the task-5 folder

//Regular expressions

// Task 6) Digit or not
const isDigit = (string) => (string.match(/^\d/) ? "Digit" : "Not");
console.log(isDigit("0david"));

// Task 7) Optional (advanced) => Check if this entry is a phone number

const checkPhoneNum = (num) =>
  /\+54-\d{4}-\d{4}/.test(num) ? "Is a Argentina phone" : "Invalid";
console.log(checkPhoneNum("+54-7153-5651"));
