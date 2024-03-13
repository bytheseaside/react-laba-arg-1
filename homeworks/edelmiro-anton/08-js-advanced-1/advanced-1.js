// Task 1 - Pluck

// let props = "preferences.sound.value";

const user2 = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

function pluck(obj, props) {
  if (!obj) {
    return null;
  }
  const splitted = props.split('.');
  let finalValue = obj;
  for (i = 0; i < splitted.length; i++) {
    if (!finalValue[splitted[i]]) {
      return null;
    }
    finalValue = finalValue[splitted[i]];
  }

  return finalValue;
}

const randomValue = Math.random();
const nullValue = null;

console.log(pluck(user2, 'preferences.sound.value')); // 30
console.log(pluck(user2, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null`

// console.log(pluck(user, props));

// Task 2 - Create a deep clone function

function clone(obj) {
  const deepClone = JSON.parse(JSON.stringify(obj));
  return deepClone;
}

const clonedUser = clone(user);
clonedUser.preferences.sound.maxValue = 70;
console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

// Task 3 - Create a function that returns how long ago a certain day was.

const date1 = new Date(2021, 01, 23, 14, 00, 00); // 23/02/2021 14:00:00
const date2 = new Date(2021, 01, 23, 13, 30, 00); // 23/02/2021 13:30:00
const date3 = new Date(2021, 01, 23, 13, 00, 00); // 23/02/2021 13:00:00
const date4 = new Date(2021, 01, 23, 11, 30, 00); // 23/02/2021 11:30:00
const date5 = new Date(2021, 01, 22, 14, 00, 00); // 23/02/2021 11:30:00
const date6 = new Date(2020, 01, 23, 10, 00, 00); // 23/02/2021 11:30:00

function offset(date1, date2) {
  const milisec1 = date1.getTime();
  const milisec2 = date2.getTime();
  const seconds = (milisec1 - milisec2) / 1000;
  const minutes = seconds / 60;
  const hours = Math.trunc(minutes / 60);
  const days = Math.trunc(hours / 24);
  const years = days / 365;

  const wordMinute = ' minute';
  if (minutes > 1) {
    wordMinute = ' minutes';
  }

  const wordHour = ' hour';
  if (hours > 1) {
    wordHour = ' hours';
  }

  const wordDay = ' day';
  if (days > 1) {
    wordDay = ' days';
  }

  const timeAgo = '';

  if (minutes > 0 && minutes < 60) {
    return (timeAgo = `${minutes} ${wordMinute} ago`);
  }
  if (hours == 1) {
    return (timeAgo = `${hours} hour ago`);
  }

  if (hours == 2) {
    return (timeAgo = `${hours} hours ${minutes / 5} minutes ago`);
  }
  if (hours >= 24) {
    return (timeAgo = `${days} ${wordDay} ago`);
  }

  if (days >= 365) {
    return (timeAgo = `${days} days ago`);
  }
}

// Task 4 - Create a function that generate a random date between to dates

const date_1 = new Date(2021, 0, 23);
const date_2 = new Date(2021, 1, 23);

function randomDate(firstDate, secondDate) {
  const date = new Date(firstDate.getTime() + Math.random() * (secondDate.getTime() - firstDate.getTime()));
  const day = `${date.getDate() < 10 ? '0' : ''}${date.getDate()}`;

  const month = `${date.getMonth() < 10 ? '0' : ''}${date.getMonth() + 1}`;

  const year = `${date.getFullYear()}`;

  return `${day}/${month}/${year}`;
}

// Task 5 - https://www.codewars.com/kata/596cf5b0e1665a2d02000007/train/javascript

function objConcat(arr) {
  const finalObj = {};
  for (i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      finalObj[key] = arr[i][key];
    }
  }
  return finalObj;
}

// Task 6 - https://www.codewars.com/kata/547f1a8d4a437abdf800055c

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    },

    set(value) {
      value = value.trim();
      if (value.includes(' ')) {
        let fullName = value.split(' ');
        this.firstName = fullName[0];
        this.lastName = fullName[1];
        value = fullName.join(' ');
      }
    },
  });
}

// let objj = {
//   _password: '827313',

//   get password() {
//     return this._password;
//   },

//   set password(value) {
//     if (value.length < 4) {
//       throw new Error('CONTRASEÑA CORTA');
//     }
//     this._password = '*'.repeat(value.length);
//   },
// };

// objj.password = '22233';
// console.log(objj.password);
