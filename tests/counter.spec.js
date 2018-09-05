const assert = require("assert");
const counter = require("../src/counter");

describe("Testando contador", function() {
  it("contador deve iniciar com valor zero", function() {
    const counterResult = counter.count;
    assert.equal(counterResult, 0);
  });
});
