const userList = require('./MOCK_DATA');

function compareSku(a, b) {
  if (a.sku > b.sku) {
    return 1;
  } else if (a.sku < b.sku) {
    return -1;
  }
  return 0;
}

/**
 * @typedef {Object} Item
 * @property {string} sku
 * @property {string} sku
 * @property {string} price
 * @property {number} pack
 */

/**
 * @param {Item[]} data
 * @param {string} value
 * @returns {Item}
 */
const straightSearch = (data, value) => {
  for (const item of data) {
    if (item.sku === value) {
      return item;
    }
  }
};

/**
 * @param {Item[]} data
 * @param {string} value
 * @returns {Item}
 */
const binarySearch = (data, value) => {
  let startIndex = 0;
  let endIndex = data.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const middle = data[middleIndex];

    if (value === middle.sku) {
      return middle;
    }
    if (value > middle.sku) {
      startIndex = middleIndex + 1;
    }
    if (value < middle.sku) {
      endIndex = middleIndex - 1;
    }
  }
};

console.time('straight search');
const straigthResult = straightSearch(userList, 'ff5e8af2-655e-4a01-bad0-56e86332640f');
console.timeLog('straight search', '\n', straigthResult, '\n');

console.time('sorting array');
userList.sort(compareSku);
console.timeLog('sorting array');

console.time('binary search');
const binaryResult = binarySearch(userList, 'ff5e8af2-655e-4a01-bad0-56e86332640f');
console.timeLog('binary search', '\n', binaryResult, '\n');
