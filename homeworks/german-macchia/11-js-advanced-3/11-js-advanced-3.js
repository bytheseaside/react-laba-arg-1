//1. [Error Throwing - Error Handling #2](https://www.codewars.com/kata/55e7650c8d894146be000095/javascript)
function validateMessage(msg) {
  const MSG_NULL_ERROR = "Message is null!";
  const MSG_TYPE = `Message should be of type string but was of type ${typeof msg}!`;
  const REGEX = new RegExp(/<[^>]*>/g);
  let flag = true;

  if (msg === null) throw new ReferenceError(MSG_NULL_ERROR);
  if (typeof msg !== "string") throw new TypeError(MSG_TYPE);
  if (msg.length > 255 || msg.length === 0)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  if (REGEX.test(msg)) flag = false;

  return flag;
}

// 2. [Jokes you've been 'awaiting' for ... promise](https://www.codewars.com/kata/5a353a478f27f244a1000076)
async function sayJoke(apiUrl, jokeId) {
  return await fetch(apiUrl)
    .then((response) => response.json())
    .then(({ jokes }) =>
      jokes
        ? jokes.find((joke) => joke.id === jokeId)
        : Promise.reject(new Error(`No jokes at url: ${apiUrl}`))
    )
    .then((joke) =>
      joke
        ? { saySetup: () => joke.setup, sayPunchLine: () => joke.punchLine }
        : Promise.reject(new Error(`No jokes found id: ${jokeId}`))
    );
}

// 3. setTimeout/setInterval
function displayElapsedTime() {
  let sec = 1;
  return setInterval(() => {
    console.log(`Elapsed Time: ${sec} sec`);
    sec++;
  }, 1000);
}

let display = displayElapsedTime();
setTimeout(() => clearInterval(display), 5500);

//4. Event Loop

/* MAIN CONCEPTS: CALL STACK, WEBAPIS, TASK QUEUE, EVENT LOOP

A.  JS is a single thread language. Meaning it can execute one thing at time.
    The reason we can make concurrent processes it's because browsers provide us additional threads (besides de JS runtime),
    that we call WEBAPIS (DOM, AJAX, SETTIMEOUT)
B.  JS read the code, it stack it into the CALL STACK to be executed.
    If this code has to read some extra code needed to be executed, JS continue to push tasks into the CALL STACK.
    After that, it execute the needed code in the order of LIFO.
    By this way, it can resolve all what it needs to resolve the first task and continue reading the main file.
C.  If there's an asynchronous callback, JS delegates it to WEBSAPIS to deal with them and continue. 
    When this callbacks are resolved they are pushed into a TASK QUEUE.
D.  If the CALL STACK it's empty the EVENT LOOP put the first resolved callback in line into the CALL STACK.


//5.Fetch API/XMLHttpRequest

/********IN FOLDER "TASK-5" *********/

//6. Digit or not
function isFirstCharNum(str){
	const REGEX = new RegExp(/^\d/)
	return REGEX.test(str)
}

