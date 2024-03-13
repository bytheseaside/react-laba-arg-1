//Katas 1: http://www.codewars.com/kata/opposite-number                  
function opposite(number) {
  return number - number * 2;
}
// Katas 2: http://www.codewars.com/kata/basic-mathematical-operations    
function basicOp(operation, number1, number2) {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
  }
}
// Katas 3: http://www.codewars.com/kata/printing-array-elements-with-comma-delimiters    
function printArray(array) {
  let output = "";
  array.forEach((element) => (output += element + ","));
  output = output.slice(0, -1);                          // Deletes last comma
  return output;
}
// Katas 4: http://www.codewars.com/kata/transportation-on-vacation   
function rentalCarCost(d) {
  if (d < 3) return d * 40;
  else if (d < 7) return d * 40 - 20;
  else return d * 40 - 50;
}
// Katas 5: http://www.codewars.com/kata/calculating-with-functions

// Katas 6: http://www.codewars.com/kata/get-the-middle-character   
function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[(s.length - 1) / 2];
  }
}

// Katas 7: http://www.codewars.com/kata/partition-on   

function partitionOn(pred, items) {
  let trueArr=[];
  for(let i=0; i<items.length;i++){
    if(pred(items[i]) === true){
      trueArr.push(items[i]);
      items.splice(i, 1);            // Deletes T elements
    }
  }
  items.push(...trueArr);            // Pushes T elements after the F's
  return items.findIndex(pred);
}

// Katas 8: http://www.codewars.com/kata/word-count       URL is broken :(

// Katas 9: https://www.codewars.com/kata/find-the-odd-int/               
function findOdd(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    let currentValue = A[i];
    for (let j = 0; j < A.length; j++) {
      if (A[j] == currentValue) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return currentValue;
    }
  }
}
// Katas 10: https://www.codewars.com/kata/find-the-parity-outlier          
function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  if (evenCount >= 2) {
    let outlier = integers.find((number) => number % 2 != 0);
    return outlier;
  } else {
    let outlier = integers.find((number) => number % 2 === 0);
    return outlier;
  }
}
// Katas 11: https://www.codewars.com/kata/zipwith                            
function zipWith(fn, a0, a1) {
  let newArray = [];
  for (let i = 0; i < Math.min(a0.length, a1.length); i++) {
    newArray.push(fn(a0[i], a1[i]));
  }
  return newArray;
}
// Katas 12: https://www.codewars.com/kata/filter-the-number                  
let filterString = function (value) {
  let numbers = "";
  for (let i = 0; i < value.length; i++) {
    if (isNaN(value[i]) == false) {
      numbers += value[i];
    }
  }
  return Number(numbers);
};
// Katas 13: https://www.codewars.com/kata/n-th-fibonacci                       
function nthFibo(n) {
  let fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibonacci[i]=(fibonacci[i - 1] + fibonacci[i - 2]);
  }
  return fibonacci[n-1];
}

// Katas 14: https://www.codewars.com/kata/cat-and-mouse-2d-version/

// Katas 15: https://www.codewars.com/kata/duplicate-encoder
function duplicateEncode(word){
    lowered=word.toLowerCase();
    let newString = "";
    for(let i=0; i<lowered.length; i++){
      if(lowered.indexOf(lowered[i])===lowered.lastIndexOf(lowered[i])){  // If the first and last time an element  
        newString+='(';                                                   //appears is the same, its not duplicated
      }
      else newString+=')';
    }
    return newString;
}
// Katas 16: https://www.codewars.com/kata/5693239fb761dc8670000001

// Katas 17: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(nFloors) {
  let tower = [];
  for(i = 1; i <= nFloors ; i++){
    let blanks = ' '.repeat(nFloors - i);  
    let asteriscs = '*'.repeat(2 * i - 1);
    let floor = `${blanks}${asteriscs}${blanks}`;
    tower.push(floor);
  }
  return tower;
} 
// Katas 18: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029               
function wave(str){
  waveArr=[];
  if (str === ''){
    return waveArr;
  }
  else{
    for(let i=0; i<str.length; i++){
      if (str[i] != ' '){
          waveArr.push(str.slice(0,i) + str[i].toUpperCase()+str.slice(i+1)) //if we have a space we push the first
        }                                                     //part, our capitalized letter, and rest of the string
      else {
        continue; 
      }
  }
  return waveArr;
  }
}  

// Katas 19: https://www.codewars.com/kata/59d398bb86a6fdf100000031           
function stringBreakers(n, string){
  let stringWithoutSpaces = string.replace(/ /g, '');
  let substring = '';  
  let arr = [];
  while(arr.length < n){
      substring += stringWithoutSpaces.substring(0, n);
      arr.push(substring);
      substring='';      
      stringWithoutSpaces = stringWithoutSpaces.substr(n, stringWithoutSpaces.length) //cut the taken chunk
  }
  return arr.join('\n');
}
// Katas 20: https://www.codewars.com/kata/514a024011ea4fb54200004b               
  function domainName(url){
    url=url.replace('http://', '')
    url=url.replace('https://', '')
    url=url.replace('www.', '')
    return url.split('.')[0]
  }
 
