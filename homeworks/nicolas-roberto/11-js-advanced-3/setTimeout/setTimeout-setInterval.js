// setTimeout/setInterval

let second = 1;

// Te interval function is called every second
const interval = setInterval(printSeconds, 1000);

// now we console log the variable "second" and add +1
function printSeconds() {
  console.log(`Elapsed time: ${second} sec`);
  second++;
}

// The setTimeout interval stops after 6 seconds
// so it can "print" the five seconds
setTimeout(() => {
  clearInterval(interval);
  // with quokka with 6 seconds prints 5 total seconds
  //But inspecting in Chrome, in 5 seconds prints 5
}, 5000);
