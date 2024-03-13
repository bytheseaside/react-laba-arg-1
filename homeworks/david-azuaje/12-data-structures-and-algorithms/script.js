const mockData = require("./MOCK_DATA");

//Linear Sort
const sortedArray = mockData.sort((a, b) => (a.sku > b.sku ? 1 : -1));

// StraightSearchForward Engine
function straightSearchForward(array, id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].sku === id) {
            return array[i];
        }
    }
    if (array.sku !== id) {
        return "Invalid Sku";
    }
}
console.time("straightSearchForward");
console.log(
    straightSearchForward(sortedArray, '63763573-d5f0-4ddc-b4be-593f814f7594')
);
console.timeEnd("straightSearchForward");

// Binary Search

function binarySearch(array, id) {
    let startIndex = 0;
    let endIndex = array.length - 1;

    while (startIndex <= endIndex) {
        const middleIndex = Math.floor((startIndex + endIndex) / 2);
        const middle = array[middleIndex];

        if (id === middle.sku) {
            return middle;
        }
        if (id > middle.sku) {
            startIndex = middleIndex + 1;
        }
        if (id < middle.sku) {
            endIndex = middleIndex - 1;
        }
    }
    return "Invalid Sku";
}
console.log(`\n\n--------------------------------------\n\n`);



//console.log("--------------------------------------");

console.time("binarySearch");
console.log(binarySearch(sortedArray, '63763573-d5f0-4ddc-b4be-593f814f7594'));
console.timeEnd("binarySearch");

//Selection Sort
function selectionSort(inputArr) {
    let lengthOfArray = inputArr.length;

    for (let i = 0; i < lengthOfArray; i++) {
        let min = i;
        for (let j = i + 1; j < lengthOfArray; j++) {
            if (inputArr[j] < inputArr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = inputArr[i];
            inputArr[i] = inputArr[min];
            inputArr[min] = tmp;
        }
    }
    return inputArr;
}



