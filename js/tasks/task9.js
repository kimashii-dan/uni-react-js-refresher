"use strict";

function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

function createAdder(value) {
  return function (x) {
    return x + value;
  };
}

function runTask9() {
  const counter1 = createCounter();
  const counter1Results = [counter1(), counter1(), counter1()];

  const counter2 = createCounter();
  const counter2FirstCall = counter2();

  const addFive = createAdder(5);

  const lines = [
    `counter1() x3: ${JSON.stringify(counter1Results)}`,
    `counter2() first call (independent count): ${counter2FirstCall}`,
    `addFive(10): ${addFive(10)}`,
    `addFive(20): ${addFive(20)}`,
  ];

  const notes = [
    "<strong>Insight:</strong> counter2 starts back at 1 even though counter1 already reached 3 - each call to createCounter() creates its own private count variable.",
    "<strong>Why closures work:</strong> the inner function keeps a reference to the scope it was created in, so it can still read and update count/value after the outer function has already returned.",
  ];

  render("output-9", "explain-9", lines, notes);
}
