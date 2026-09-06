"use strict";

function runTask2() {
  const numbers = [3, 7, 2, 10, 5];

  const doubled = numbers.map((n) => n * 2);
  const greaterThan5 = numbers.filter((n) => n > 5);
  const firstGreaterThan5 = numbers.find((n) => n > 5);
  const sum = numbers.reduce((total, n) => total + n, 0);
  const has10 = numbers.includes(10);

  const lines = [
    `original: ${JSON.stringify(numbers)}`,
    `doubled: ${JSON.stringify(doubled)}`,
    `greaterThan5: ${JSON.stringify(greaterThan5)}`,
    `firstGreaterThan5: ${firstGreaterThan5}`,
    `sum: ${sum}`,
    `includes(10): ${has10}`,
    `original after all operations: ${JSON.stringify(numbers)}`,
  ];

  const notes = [
    "<strong>Insight:</strong> map, filter and reduce all return new values instead of mutating numbers, so the original array stays [3, 7, 2, 10, 5] throughout.",
  ];

  render("output-2", "explain-2", lines, notes);
}
