
const assert = require('chai').assert;
// const { expect } = require('chai')
const middle = require('../middle')

describe("Middle function testing", () => {
  
  it.only("returns an empty array if one number in array", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns an empty array if one number in array", () => {
    expect(middle([1])).to.eql([]);
  });

  it("returns an empty array when 2 numbers array is passed", () => {
    expect(middle([1, 2])).to.eql([]);
  });

  it("returns a middle element if odd number of elements is passed", () => {
    expect(middle([1, 2, 3])).to.eql([2]);
  });

  it("returns two middle elements if even number of elements is passed", () => {
    expect(middle([1, 2, 3, 4])).to.eql([2, 3]);
  });

});