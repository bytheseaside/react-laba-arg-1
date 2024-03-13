// TASK 1. https://www.codewars.com/kata/55e7650c8d894146be000095/javascript

function validateMessage(msg) {
  const htmlRegex = /(< ?[a-z]+ ?>)/i;
  if (msg == null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg != 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (msg.match(htmlRegex)) {
    return false;
  }
  return true;
}

//TASK 2. https://www.codewars.com/kata/5a353a478f27f244a1000076

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const jsonResponse = await response.json();

  if (!jsonResponse.jokes) throw new Error(`No jokes at url: ${apiUrl}`);

  const result = jsonResponse.jokes.find((joke) => joke.id === jokeId);
  if (!result) throw new Error(`No jokes found id: ${jokeId}`);

  return {
    saySetup: function () {
      return result.setup;
    },
    sayPunchLine: function () {
      return result.punchLine;
    },
  };
}

// TASK 3. ## 3. setTimeout/setInterval

let secs = 1;
const secsDisplay = setInterval(() => {
  console.log(`Elapsed time: ${secs} sec`);
  secs++;
}, 1000);
setTimeout(() => {
  clearInterval(secsDisplay);
}, 6000);

// TASK 4. - Event Loop VIDEO AND DEMO

// TASK 5.  IN FOLDER "TASK 5"

// TASK 6. Digit or not

function firstDigit(str) {
  if (/^\d/.test(str)) {
    return `WOHO ! The strings stats with a digit`;
  } else {
    return 'UPS... The string doesnt start with a digit';
  }
}

// TASK 7. Optional (advanced)

const regexPhone = /^[+]*54[\s-]*(\d{3}[\s-]*\d{4}[\s-]*\d{3})$/;

function argPhone(phoneNumber) {
  if (regexPhone.test(phoneNumber)) {
    return phoneNumber;
  } else {
    return 'invalid Argentinian phone number';
  }
}
