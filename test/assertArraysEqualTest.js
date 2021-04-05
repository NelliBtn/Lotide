const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("assertArraysEqual function testing", () => {
  it("should return true if arrays are equal", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
});