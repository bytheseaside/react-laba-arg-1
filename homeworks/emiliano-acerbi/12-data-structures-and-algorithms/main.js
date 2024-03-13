import './style.css';
import data from './MOCK_DATA';
const SORTED_DATA = data.sort((a, b) => (a.sku > b.sku ? 1 : -1));

// Linear search

function linearSearch(array, target) {
  for (let index = 0; index < array.length; index++) {
    if (array[index].sku === target) {
      return array[index];
    }
  }
}

console.time('Linear search time');
console.log(linearSearch(SORTED_DATA, '17267760-4c99-4273-93d4-d2e9242ff524'));
console.timeEnd('Linear search time');

// Binary search

function binarySearch(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = array[mid].sku;

    if (guess === target) {
      return array[mid];
    }

    if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

console.time('Binary search time');
console.log(binarySearch(SORTED_DATA, '17267760-4c99-4273-93d4-d2e9242ff524'));
console.timeEnd('Binary search time');

// Small array to test sorts

const needleList = [
  { sku: '8d91e904-5f73-4241-bda2-5484bcbea4e9', name: 'Salmon - Atlantic, Skin On', price: '£15.17', pack: 10 },
  { sku: '722e91f2-ec4b-4802-9419-491b07ef2de9', name: 'Spring Roll Veg Mini', price: '£0.61', pack: 25 },
  { sku: '638873fb-d63b-4792-a728-c1498bbff473', name: 'Clams - Bay', price: '£15.92', pack: 5 },
  { sku: 'f9eeb0c4-b657-461c-b53e-82832b9dfc5a', name: 'Cherries - Bing, Canned', price: '£6.60', pack: 10 },
  { sku: '3f8c43cc-ee3f-4b8b-a9b4-fd98d690c648', name: 'Tofu - Firm', price: '£8.52', pack: 15 },
  { sku: 'fd657287-a4bc-4544-9276-002ed43b5d6b', name: 'Nut - Pecan, Pieces', price: '£18.72', pack: 10 },
  { sku: '979c2fba-aabc-4772-a03d-876448f2db6a', name: 'Sobe - Green Tea', price: '£17.37', pack: 1 },
  { sku: 'd462bb76-81ee-46af-9fdb-ebfe53a93d3f', name: 'Syrup - Chocolate', price: '£11.35', pack: 10 },
  { sku: 'd2f31f2a-9b7b-42b6-b134-a4563fa5b4b2', name: 'Artichoke - Fresh', price: '£3.90', pack: 1 },
  { sku: '7980dcfb-fa04-4c60-a3a4-2892f83146c7', name: 'Juice - Apple, 1.36l', price: '£15.42', pack: 15 },
];

// Javascript's sort function

function linearSort(array) {
  const copyArr = [...array];
  return copyArr.sort((a, b) => (a.sku > b.sku ? 1 : -1));
}

console.time('Linear sort time');
console.log(linearSort(needleList));
console.timeEnd('Linear sort time');

// Bubble sort

function bubbleSort(array) {
  const copyArr = [...array];
  for (let i = 0; i < copyArr.length; i++) {
    for (let j = 0; j < copyArr.length - i - 1; j++) {
      if (copyArr[j].sku > copyArr[j + 1].sku) {
        let temp = copyArr[j];
        copyArr[j] = copyArr[j + 1];
        copyArr[j + 1] = temp;
      }
    }
  }
  return copyArr;
}

console.time('Bubble sort time');
console.log(bubbleSort(needleList));
console.timeEnd('Bubble sort time');
