// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual; // passing the variable assertEqual, but NOT CALLING the function

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual('Light', 'Light');
// assertEqual(5, 5);
// assertEqual('5', 5);


/*
If the values match, it should print (console.log) the following:
Assertion Passed: [actual] === [expected] (but with the values filled in)

Otherwise it should print(console.log) the following:
Assertion Failed: [actual] !== [expected](but with the values filled in)
*/