// ## TASK 1. Pluck - Create a function to access the properties of an object.

const user = {
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

function pluck(obj, key) {
  const splitKey = key.split('.');
  let result = obj;
  if (typeof result === 'object' && result !== null) {
    for (let i = 0; i < splitKey.length; i++) {
      if (result.hasOwnProperty([splitKey[i]])) {
        result = result[splitKey[i]];
      } else {
        return null;
      }
    }
    return result;
  } else {
    return null;
  }
}

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); //null

// ## TASK 2. Deep Clone - Create custom deep clone function.

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
const clonedUser = clone(user);

clonedUser.preferences.sound.maxValue = 70;

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

// ## TASK 3. "A long time ago" - Create a function that returns how long ago a certain day was.

function timeAgo(date) {
  const yearMinutes = 525600;
  const monthMinutes = 43800;
  const dayMinutes = 1440;
  const hourMinutes = 60;
  let now = new Date();
  let arr = date.split(/(\d+)/).filter((x) => x.match(/(\d+)/));
  let after = new Date(arr[2], arr[1] - 1, arr[0], arr[3], arr[4], arr[5]);
  let diff = (now - after) / 1000 / 60; //diff in minutess
  if (diff < 0 || !diff) {
    return 'invalid date, please set a date like "DD/MM/YYYY hh:mm:ss"';
  }
  if (diff > yearMinutes) {
    return `${Math.floor(diff / yearMinutes)} year and ${Math.floor((diff % yearMinutes) / monthMinutes)} months ago`;
  } else if (diff > monthMinutes) {
    return `${Math.floor(diff / monthMinutes)} months and ${Math.floor((diff % monthMinutes) / dayMinutes)} days ago`;
  } else if (diff > dayMinutes) {
    return `${Math.floor(diff / dayMinutes)} days and ${Math.floor((diff % dayMinutes) / hourMinutes)} hours ago`;
  } else if (diff > hourMinutes) {
    return `${Math.floor(diff / hourMinutes)} hours and ${Math.floor(diff % hourMinutes)} minutes ago`;
  } else {
    return `${Math.floor(diff)} minutes ago`;
  }
}
// TEST
console.log(timeAgo('23/02/2021 13:00:00'));
console.log(timeAgo('23/02/2020 13:00:00'));
console.log(timeAgo('10/08/2021 09:22:00'));
console.log(timeAgo('8/11/2021 14:45:00'));
console.log(timeAgo('25/06/2022 13:45:00'));
console.log(timeAgo('23/08/2022 13:22:00'));
console.log(timeAgo('03/04/2022 13:22:00'));
console.log(timeAgo('03/08/2022 16:00:00'));
console.log(timeAgo('03/08/2028 13:58:00'));

//## TASK 4. Random dates - Create a function that generate a random date between to dates

function randomDate(d1, d2) {
  function random(a, b) {
    if (a > b) {
      return Math.floor(Math.random() * (1 + a - b) + b);
    } else {
      return Math.floor(Math.random() * (1 + b - a) + a);
    }
  }

  const randomYear = random(d1.getFullYear(), d2.getFullYear());
  const randomMonth = random(d1.getMonth(), d2.getMonth()) + 1;
  const randomDay = random(d1.getDay(), d2.getDay());
  let randomDate = new Date(randomYear, randomMonth, randomDay);

  const yyyy = randomDate.getFullYear();
  let mm = randomDate.getMonth() + 1;
  let dd = randomDate.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const formattedDate = dd + '/' + mm + '/' + yyyy;

  return formattedDate;
}

// ## Codewars task

// TASK  5. [Merged Objects](https://www.codewars.com/kata/merged-objects)

function objConcat(objs) {
  return Object.assign({}, ...objs);
}

// TASK 6. ["this" is an other problem](https://www.codewars.com/kata/547f1a8d4a437abdf800055c)

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
      const split = value.split(' ');
      if (split.length == 2) {
        this.firstName = split[0];
        this.lastName = split[1];
      }
    },
  });
}
