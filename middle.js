const eqArrays = function (array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function (theWholeArray) {
  const length = theWholeArray.length;
  let midNumbers = [];
  const midIndex = Math.floor(length / 2);
  if (length <= 2) {
    midNumbers = [];
  } else if (length % 2 === 0) {
    midNumbers.push(theWholeArray[midIndex - 1]);
    midNumbers.push(theWholeArray[midIndex]);
  } else {
    midNumbers.push(theWholeArray[midIndex]);
  };
  return midNumbers;

};



// One or Two numbers
const middleOfArray = middle([1]);
assertArraysEqual (middleOfArray, []); // => []
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