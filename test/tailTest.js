const words = ["Yo Yo", "Lighthouse", "Labs"];
const assert = require('chai').assert;
const tail = require('../tail');

describe("Tail function testing", () => {

  it("returns the first part of the tail", () => {
    assert.equal(tail(words)[0], 'Lighthouse');
  });

  it("returns the second part of the tail", () => {
    assert.equal(tail(words)[1], 'Labs');
  });
});