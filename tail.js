const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let arrayTail = array.slice(1);
  return arrayTail;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];

// assertEqual(tail(words).join(), ['Lighthouse', 'Labs'].join());

const result = tail(words);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');