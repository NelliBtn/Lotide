const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const findKeyByValue = function (object, value) {
//   for (let keyName in object) {
//     if (object[keyName] === value) {
//       return keyName;
//     }
//   } return undefined;
// };

const findKeyByValue = function (object, value) {
  const arrayOfKeys = Object.keys(object);
  for (let key of arrayOfKeys) {
    if (object[key] === value) {
      return key;
    }
  } return undefined;
}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);