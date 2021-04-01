// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function (array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  } return true;
};

// const assertArraysEqual = function (arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`🚫🚫🚫 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };



const eqObjects = function (object1, object2) {
  const arrOfKeys1 = Object.keys(object1);
  const arrOfKeys2 = Object.keys(object2);
  if (arrOfKeys1.length !== arrOfKeys2.length) {
    return false;
  };

  for (let key of arrOfKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if(!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
        if (object1[key] !== object2[key]) {
          return false;
        } 
      };
  }
  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true