// 7.

function startsWithNumber(string) {
  return /^\d/.test(string);
}

console.log(startsWithNumber('solvd'));
console.log(startsWithNumber('23car'));

// 8.

function isFromArgentina(string) {
  return /^[+]*[(]{0,1}[5]{0,1}[4]{0,1}[)]{0,1}[-\s\./0-9]*$/g.test(string);
}

console.log(isFromArgentina('+(54) 1137037602'));
console.log(isFromArgentina('+(36) 1137037602'));
console.log(isFromArgentina('54 1137037602'));
