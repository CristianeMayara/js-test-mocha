const assert = require("assert");
const counter = require("../src/counter");

describe("Testando contador", function() {
  it("contador deve iniciar com valor zero", function() {
    const counterResult = counter.count;
    assert.equal(counterResult, 0);
  });

  it("teste de incremento de 1", function() {
    counter.count = 0;
    counter.increment();
    const counterResult = counter.count;
    assert.equal(counterResult, 1);
  });

  it("teste de decremento de 1", function() {
    counter.count = 0;
    counter.decrement();
    const counterResult = counter.count;
    assert.equal(counterResult, -1);
  });
});
