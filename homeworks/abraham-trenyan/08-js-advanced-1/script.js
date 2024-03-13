//  1. Pluck --> Im stuck with this one, still doesnt work. This is my code so far(commented)

/* const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};
const randomValue = Math.random();
const nullValue = null;

function pluck(obj, props) {
  let propsArr = props.split('.');
  let response;
  for (i = 0; i < propsArr.length; i++) {
    if (typeof obj === 'object' && obj.hasOwnProperty(propsArr[0])) {
      response = obj[propsArr[i]];
    }
  }
  return response;
}

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null
 */
//  2. Deep clone

function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
}

//  3. A long time ago

function offset(date) {
  let timestamp = new Date(date);
  let now = new Date();
  let secs = Math.abs(now.getTime() - timestamp.getTime()) / 1000;
  const SECS_IN_MIN = 60;
  const SECS_IN_HOUR = SECS_IN_MIN * 60;
  const SECS_IN_DAY = SECS_IN_HOUR * 24;
  const SECS_IN_MONTH = SECS_IN_DAY * 30;
  const SECS_IN_YEAR = SECS_IN_MONTH * 12;
  if (secs < SECS_IN_MIN) {
    return secs, ' seconds ago';
  }
  if (secs < SECS_IN_HOUR) {
    return Math.round(secs / SECS_IN_MIN) + ' minutes ago';
  }
  if (secs < SECS_IN_DAY) {
    return `${Math.round(secs / SECS_IN_HOUR)} hours and ${Math.round(secs / SECS_IN_MIN)} minutes ago`;
  }
  if (secs < SECS_IN_MONTH) {
    return Math.round(secs / SECS_IN_DAY) + ' days ago';
  }
  if (secs < SECS_IN_YEAR) {
    return Math.round(secs / SECS_IN_MONTH) + ' months ago';
  } else {
    return Math.round(secs / SECS_IN_YEAR) + ' years ago';
  }
}
//  4. Random dates
const date1 = new Date(1995, 4, 2);
const date2 = new Date(2007, 5, 6);
function randomDate(start, end) {
  let date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date;
}
console.log(randomDate(date1, date2));
//    5. Merged Objects https://www.codewars.com/kata/merged-objects
function objConcat(arr) {
  let mergedObj = {};
  for (let i = 0; i < arr.length; i++) {
    for (key in arr[i]) {
      mergedObj[key] = arr[i][key];
    }
  }
  return mergedObj;
}
//  6. "this" is another problem https://www.codewars.com/kata/547f1a8d4a437abdf800055c
function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    set: function (fullName) {
      fullName.split(' ');
      if (fullName.match(/\w+ \w+/)) {
        [this.firstName, this.lastName] = fullName.split(' ');
      }
    },
  });
}
