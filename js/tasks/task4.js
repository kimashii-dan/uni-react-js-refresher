"use strict";

function runTask4() {
  const user = {
    id: 1,
    name: "Anna",
    age: 21,
    address: { city: "Almaty", street: "Abay" },
  };

  const readName = user.name;
  const readCity = user.address.city;

  user.age = 22;
  user.email = "anna@example.com";
  delete user.address.street;

  const { name, age } = user;
  const {
    address: { city },
  } = user;
  const { name: userName } = user;

  const lines = [
    `read name: ${readName}`,
    `read city: ${readCity}`,
    `after change age / add email / remove street: ${JSON.stringify(user)}`,
    `destructured name, age: ${name}, ${age}`,
    `nested destructured city: ${city}`,
    `renamed name -> userName: ${userName}`,
  ];

  const notes = [
    "<strong>Insight:</strong> destructuring with { address: { city } } reaches straight into a nested object without a separate user.address.city step.",
  ];

  render("output-4", "explain-4", lines, notes);
}
