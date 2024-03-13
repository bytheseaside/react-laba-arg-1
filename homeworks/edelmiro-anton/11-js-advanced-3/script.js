// Task 1 - Kata https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript

const validateMessage = (msg) => {
  if (msg == null) {
    throw new ReferenceError('Message is null!');
  }
  if (typeof msg != 'string') {
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  }
  if (msg.length > 255 || msg.length === 0) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  }

  if (msg.match(/(< ?[a-z]+ ?>)/i)) {
    return false;
  }
  return true;
};

// Task 3 - setTimeout/setInterval

let i = 1;
let timer = setInterval(() => {
  console.log(`Elapsed time ${i} sec`);
  if (i === 5) {
    clearInterval(timer);
    console.log('Timer finished!');
  }
  i++;
}, 1000);

// Task 6 - Digit or not

let firstCharIsNumber = /^\d/g;
let firstCharWithSpace = /^\d/g;

let finalRegex = new RegExp(firstCharIsNumber.source + '|' + firstCharWithSpace.source);

function digitOrNot(str) {
  if (typeof str === 'string') {
    if (str.match(finalRegex)) {
      return `The string "${str}" starts with a NUMBER`;
    }

    if (!str.match(finalRegex)) {
      return `The string "${str}" DO NOT starts with a NUMBER`;
    }
  }
}

const url = 'https://randomuser.me/api/?gender=female&results=10';

// ***** FETCH ***** //
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    const info = data.results;
    const container = document.querySelector('#container');

    for (let i = 0; i < info.length; i++) {
      let userDiv = document.createElement('div');
      let userImg = document.createElement('img');
      let userName = document.createElement('p');
      userDiv.style.textAlign = 'center';
      userImg.src = `${info[i].picture.thumbnail}`;
      userImg.style.width = '50px';
      userImg.style.height = '50px';
      userName.innerHTML = `${info[i].name.first} ${info[i].name.last}`;
      container.appendChild(userDiv);
      userDiv.appendChild(userImg);
      userDiv.appendChild(userName);
    }
  })
  .catch((err) => console.log(err));

//Task 2 - https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript

async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data.hasOwnProperty('jokes')) {
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
