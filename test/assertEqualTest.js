//const assertEqual = require('../assertEqual');

//TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual('Light', 'Light');
// assertEqual(5, 5);
// assertEqual('5', 5);

const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("assertEqual function testing", () => {
  it("should return true if elements are equal", () => {
    assert.strictEqual(assertEqual('Light', 'Light'), true);
  });

  it("should return false if elements are not equal", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });

  it("should return false if elements have different data types", () => {
    assert.strictEqual(assertEqual('5', 5), false);
  });

  it("should return true if numbers are equal", () => {
    assert.deepEqual(assertEqual(5, 5), true);
  });

});
