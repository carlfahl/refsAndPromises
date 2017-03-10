// Javascript objects are passed by 'copy of reference'
//
// Primitives are passed by value.
// Strings are objects, but they are immutable.
//

var x = 5;
var y = 4;

var obj = {first: 1};

var myArray = [];

var myStr = 'Hello, World';

function addTo(data, amount) {
  data += amount;
}

myStr[2] = 'tr';

function addToArray(ar, value) {
  ar.push(value);
}

function addToString(st, addSt) {
  st = st + addSt;
}

function changeObj(obj, field, value) {
  obj[field] = value;
}

console.log('x = ', x, 'y = ', y);
console.log(myStr);

addTo(x, 3);
addTo(y, 2);
addToArray(myArray, 5);
addToArray(myArray, 5);
addToArray(myArray, 5);
addToString(myStr, ' I am Carl.');
changeObj(obj, 'second', 2);

console.log('x = ', x, 'y = ', y);
console.log(myArray);
console.log(myStr);
console.log(obj);
