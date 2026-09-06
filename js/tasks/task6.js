"use strict";

function isEven(number) {
  return number % 2 === 0;
}
const isEvenArrow = (number) => number % 2 === 0;

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function calculatePrice(price, quantity) {
  return price * quantity;
}

function calculateDiscount(price, percent) {
  return price - (price * percent) / 100;
}

function getMax(a, b) {
  return a > b ? a : b;
}

function runTask6() {
  const lines = [
    `isEven(4): ${isEven(4)}`,
    `isEven (arrow) (4): ${isEvenArrow(4)}`,
    `getFullName("Anna", "Ivanova"): ${getFullName("Anna", "Ivanova")}`,
    `calculatePrice(1500, 3): ${calculatePrice(1500, 3)}`,
    `calculateDiscount(1000, 20): ${calculateDiscount(1000, 20)}`,
    `getMax(7, 12): ${getMax(7, 12)}`,
  ];

  const notes = [
    '<strong>Insight:</strong> isEven and isEvenArrow behave identically; the arrow version is just shorter syntax with no own "this".',
  ];

  render("output-6", "explain-6", lines, notes);
}
