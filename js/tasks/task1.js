"use strict";

function runTask1() {
  const name = "Anna";
  const age = 21;
  const active = true;
  const courses = ["Math", "CS"];
  const address = { city: "Almaty", street: "Abay" };
  const emptyValue = null;
  let notSet;

  const sentence = `${name} is ${age} years old and currently active in ${courses.join(", ")}.`;

  const lines = [
    `name: ${name} (${typeof name})`,
    `age: ${age} (${typeof age})`,
    `active: ${active} (${typeof active})`,
    `courses: ${JSON.stringify(courses)} (${typeof courses})`,
    `address: ${JSON.stringify(address)} (${typeof address})`,
    `emptyValue: ${emptyValue} (${typeof emptyValue})`,
    `notSet: ${notSet} (${typeof notSet})`,
    `Sentence: ${sentence}`,
    `Primitive values: name, age, active, notSet, emptyValue`,
    `Reference values: courses, address`,
  ];

  const notes = [
    "<strong>let vs const:</strong> let can be reassigned, const cannot be reassigned (though a const object/array can still have its contents mutated).",
    '<strong>typeof null:</strong> returns "object" - a long-standing bug kept in JS for backward compatibility.',
    "<strong>Primitive types:</strong> string, number, boolean, null, undefined, bigint, symbol.",
    '<strong>Insight:</strong> null is an explicit "empty" value I set myself, while undefined means a variable was never assigned.',
  ];

  render("output-1", "explain-1", lines, notes);
}
