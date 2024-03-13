//1. Pluck
function solution1() {
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
    if (typeof obj === 'object' && obj !== null) {
      const path = key.split('.');
      let res = null;

      path.forEach((key) => {
        if (typeof res === 'object' && res !== null) {
          res = getValue(res, key);
        } else {
          res = getValue(obj, key);
        }
      });

      return res;
    }

    function getValue(obj, key) {
      if (obj[`${key}`]) {
        return obj[`${key}`];
      }

      return null;
    }

    return null;
  }

  console.log(pluck(user, 'preferences.sound.value')); // 30
  console.log(pluck(user, 'unknown.key')); // null
  console.log(pluck(randomValue, 'unknown.key')); // null
  console.log(pluck(nullValue, 'unknown.key')); // null
}

//2. Deep clone
function solution2() {
  const user = {
    username: 'testuser1',
    preferences: {
      sound: {
        maxValue: 50,
        value: 30,
      },
    },
  };
  const clonedUser = clone(user);

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  clonedUser.preferences.sound.maxValue = 70;

  console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false
}

//3. A long time ago
function offset(arrayDate) {
  const [givenDate, _] = arrayDate;
  const current = new Date();
  const diffMilliseconds = current - givenDate;

  const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));

  let seconds = Math.floor(diffMilliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  }

  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }
  if (hours < 24) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
}

function moment(date, format) {
  const [days, month, year] = date.split(' ')[0].split('/');

  if (date.split(' ').length > 1) {
    const hours = date.split(' ')[1];
    const givenDate = new Date(`${year}-${month}-${days}T${hours}`);

    return [givenDate, format];
  } else {
    return new Date(`${year}-${month}-${days}`);
  }
}

console.log(offset(moment('16/08/2021 06:35:30', 'DD/MM/YYYY hh:mm:ss')));

//4.Random dates
function randomDate(start, end) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const startDate = new Date(start.getTime());
  const dates = [];

  while (startDate < end) {
    startDate.setDate(startDate.getDate() + 1);
    dates.push(new Date(startDate));
  }

  class randomDate {
    constructor(date) {
      this.date = date;
    }

    get() {
      return this.date();
    }

    format() {
      return `${this.date.getDate()}/${this.date.getUTCMonth()}/${this.date.getUTCFullYear()}`;
    }
  }

  return new randomDate(dates[getRandomInt(0, dates.length - 1)]);
}

const date1 = moment('23/01/2021', 'DD/MM/YYYY');
const date2 = moment('23/03/2021', 'DD/MM/YYYY');

console.log(randomDate(date1, date2).format('DD/MM/YY'));

//5 https://www.codewars.com/kata/merged-objects
function objConcat(obj) {
  return Object.assign({}, ...obj);
}
