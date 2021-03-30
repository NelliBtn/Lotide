// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertArraysEqual = function(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      console.log(`🚫🚫🚫 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  } console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);

}

assertArraysEqual([1, 2, 3], [1, 2, 3]);

// const eqArrays = function (array1, array2) {
//   for (let x = 0; x < array1.length; x++) {
//     if (array1[x] !== array2[x]) {
//       return false;
//     }
//   } return true;
// };