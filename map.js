const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for(let item of array) {
    results.push(callback(item))
  }
  return results;
};

const results1 = map(words, word => word[0]);

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

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])