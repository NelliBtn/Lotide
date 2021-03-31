const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (string) {
  let letters = {};
  string = string.split(' ').join('');
  for (let char of string) {
    if (letters[char]) {
      letters[char] += 1;
    } else {
      letters[char] = 1;
    }
  }
return letters;
};

console.log(countLetters("lighthouse in the house"));


const resultActual = countLetters("lighthouse in the house");
const resultExpected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
assertEqual(Object.entries(resultActual).join(''), Object.entries(resultExpected).join(''));
