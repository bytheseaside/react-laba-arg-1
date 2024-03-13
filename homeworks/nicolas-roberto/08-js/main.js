// task 1 Pluck

const user = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

function pluck(objectName, key) {
  let object = objectName;
  let keyToArray = key.split('.');
  for (let index = 0; index < keyToArray.length; index++) {
    if (!object) {
      return null;
    } else if (!object[keyToArray[index]]) {
      return null;
    }
    object = object[keyToArray[index]];
  }
  return object;
}

const randomValue = Math.random();
const nullValue = null;

console.log(pluck(user, 'preferences.sound.value')); // 30
console.log(pluck(user, 'unknown.key')); // null
console.log(pluck(randomValue, 'unknown.key')); // null
console.log(pluck(nullValue, 'unknown.key')); // null

// task 2 Deep clone

const users = {
  username: 'testuser1',
  preferences: {
    sound: {
      maxValue: 50,
      value: 30,
    },
  },
};

function clone() {
  const deepCopy = JSON.parse(JSON.stringify(users));
  return deepCopy;
}

const clonedUser = clone(users);

clonedUser.preferences.sound.maxValue = 70;

console.log(user.preferences.sound.maxValue === clonedUser.preferences.sound.maxValue); // false

// kata 4 Random dates
//Work in progress, for some reason i still can figure out, it gets random dates up to march.
function randomDate(startDate, endDate) {
  const minValue = startDate.getTime();
  const maxValue = endDate.getTime();
  const timestamp = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  return new Date(timestamp);
}

console.log(randomDate(new Date(2021, 1, 23), new Date(2021, 2, 23)).toLocaleDateString());

// kata 5 Merged objects https://www.codewars.com/kata/merged-objects

function objConcat(array) {
  let merged = {};
  //Makes a loop for each object in the array
  array.forEach((object) => {
    //and inside makes a loop for every key in the object
    for (keys in object) {
      //Merged will have a key for every key in the original array
      //So the keys will remain the same, but the new values will
      //get replaced in each loop with the new/repeated values.
      merged[keys] = object[keys];
    }
  });
  return merged;
}
//Test
let object = [
  (a = { 1: '1', 2: '2', 3: '3' }),
  (b = { 3: '4', 5: '6', 6: '7', 7: '8' }),
  (c = { 5: '9', 8: '9', 6: '12', 23: '35' }),
];

console.log(objConcat(object));

// kata 6 "this" is an other problem https://www.codewars.com/kata/547f1a8d4a437abdf800055c/train/javascript
