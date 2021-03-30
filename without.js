const eqArrays = function (array1, array2) {
  console.log(array1);
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = function (arr1, arr2) {
  console.log(arr1);
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const without = function (sourceArray, itemsToRemove) {
  let finalArray = sourceArray;
  for (let x = 0; x < sourceArray.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (sourceArray[x] === itemsToRemove[y]) {
          indexToRemove = finalArray.indexOf(sourceArray[x]);
          finalArray.splice(indexToRemove, 1);
      }
    }
  }
  return finalArray;
};

let array = without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]


assertArraysEqual(array, [2, 3]);