const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 1, 3]), true); // => should not pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), false); // => should not pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should pass