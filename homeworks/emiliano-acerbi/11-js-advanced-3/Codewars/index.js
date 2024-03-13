// 1. https://www.codewars.com/kata/55e7650c8d894146be000095/javascript

function validateMessage(msg) {
  const regex = /<[^>]*>/;
  if (msg === null) throw new ReferenceError('Message is null!');
  if (typeof msg !== 'string') throw TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  if (msg.length < 1 || msg.length > 255) throw RangeError(`Message contains ${msg.length} characters!`);
  return !regex.test(msg);
}

// 2. https://www.codewars.com/kata/5a353a478f27f244a1000076

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data) {
    throw new Error(`No jokes at url: ${apiUrl}`);
  }

  const joke = data.jokes.find(function (joke) {
    return joke.id === jokeId;
  });

  if (!joke) {
    throw new Error(`No jokes found id: ${jokeId}`);
  }

  return {
    saySetup: () => joke.setup,
    sayPunchLine: () => joke.punchLine,
  };
}
