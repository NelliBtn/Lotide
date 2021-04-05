const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')


// One or Two numbers
const middleOfArray = middle([1]);
assertArraysEqual(middleOfArray, []); // => []
const middleOfArray1 = middle([1, 2]); // => []
assertArraysEqual(middleOfArray1, []);

// // Array with odd number of elements
const middleOfArray2 = middle([1, 2, 3]) // => [2]
assertArraysEqual(middleOfArray2, [2]);
const middleOfArray3 = middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middleOfArray3, [3]);

// // Array with even number of elements
const middleOfArray4 = middle([1, 2, 3, 4]) // => [2, 3]
assertArraysEqual(middleOfArray4, [2, 3]);
const middleOfArray5 = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(middleOfArray5, [3, 4]);