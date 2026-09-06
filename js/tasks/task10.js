"use strict";

function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

function runTask10() {
  const numbers = [10, 20, 30, 40];
  const [first, second] = numbers;

  const user = { id: 1, name: "Anna", age: 21 };
  const { name, age } = user;

  const newNumbers = [...numbers, 50];
  const olderUser = { ...user, age: 22 };
  const userWithEmail = { ...user, email: "anna@example.com" };

  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const combined = [...arr1, ...arr2];

  const lines = [
    `first, second: ${first}, ${second}`,
    `destructured name, age: ${name}, ${age}`,
    `numbers with 50 added (new array): ${JSON.stringify(newNumbers)}, original: ${JSON.stringify(numbers)}`,
    `user with age 22 (new object): ${JSON.stringify(olderUser)}, original: ${JSON.stringify(user)}`,
    `user with email (new object): ${JSON.stringify(userWithEmail)}, original: ${JSON.stringify(user)}`,
    `combined arrays: ${JSON.stringify(combined)}`,
    `sum(1, 2): ${sum(1, 2)}`,
    `sum(1, 2, 3, 4): ${sum(1, 2, 3, 4)}`,
  ];

  const notes = [
    "<strong>Spread vs rest:</strong> spread (...arr) expands an array/object out into individual elements or a new copy; rest (...numbers) does the opposite - it gathers multiple arguments back into a single array.",
  ];

  render("output-10", "explain-10", lines, notes);
}
