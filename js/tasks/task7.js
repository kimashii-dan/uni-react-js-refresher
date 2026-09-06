"use strict";

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

function runTask7() {
  const lines = [
    `calculate(5, 3, add): ${calculate(5, 3, add)}`,
    `calculate(5, 3, multiply): ${calculate(5, 3, multiply)}`,
  ];

  const notes = [
    "Functions can be stored in variables - they are values, just like numbers or strings.",
    "Functions can be passed to other functions as arguments, which is exactly how calculate picks which operation to run.",
    "<strong>add vs add():</strong> add refers to the function itself (its reference); add() calls it and refers to the value it returns.",
  ];

  render("output-7", "explain-7", lines, notes);
}
