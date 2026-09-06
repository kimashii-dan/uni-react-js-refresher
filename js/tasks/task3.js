"use strict";

function runTask3() {
  const students = [
    { name: "Anna", id: 1, grade: 85 },
    { name: "John", id: 2, grade: 62 },
    { name: "Sara", id: 3, grade: 91 },
    { name: "Mike", id: 4, grade: 55 },
  ];

  const passing = students.filter((s) => s.grade >= 50);
  const names = students.map((s) => s.name);
  const studentWithId3 = students.find((s) => s.id === 3);
  const topStudent = students.reduce((top, s) =>
    s.grade > top.grade ? s : top,
  );
  const average =
    students.reduce((total, s) => total + s.grade, 0) / students.length;
  const withPassed = students.map((s) => ({ ...s, passed: s.grade >= 50 }));

  const lines = [
    `passing (grade >= 50): ${JSON.stringify(passing)}`,
    `names: ${JSON.stringify(names)}`,
    `student with id 3: ${JSON.stringify(studentWithId3)}`,
    `top student: ${JSON.stringify(topStudent)}`,
    `average grade: ${average.toFixed(2)}`,
    `students with passed field: ${JSON.stringify(withPassed)}`,
    `original students (unchanged, no passed field): ${JSON.stringify(students)}`,
  ];

  const notes = [
    "<strong>Insight:</strong> spreading each student into a new object ({...s, passed: ...}) builds a fresh object, so the original students array never gains a passed field.",
  ];

  render("output-3", "explain-3", lines, notes);
}
