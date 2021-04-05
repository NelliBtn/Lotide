const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("eqArrays function testing", () => {
  it("should return true if functions are equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it("should return false  if functions are not equal", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 1, 3]), false);
  });

  it("should return false if functions have different data types", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

});