"use strict";

function getAverage(grades) {
  return grades.reduce((total, g) => total + g, 0) / grades.length;
}

function getStudentAverage(student) {
  return getAverage(student.grades);
}

function getPassedStudents(students) {
  return students.filter((s) => getStudentAverage(s) >= 50);
}

function getStudentNames(students) {
  return students.map((s) => s.name);
}

function findStudent(students, id) {
  return students.find((s) => s.id === id);
}

function getTopStudent(students) {
  return students.reduce((top, s) =>
    getStudentAverage(s) > getStudentAverage(top) ? s : top,
  );
}

function runFinalTask() {
  const students = [
    { id: 1, name: "Anna", age: 21, grades: [85, 90, 78] },
    { id: 2, name: "John", age: 22, grades: [60, 55, 70] },
    { id: 3, name: "Sara", age: 20, grades: [91, 95, 89] },
    { id: 4, name: "Mike", age: 23, grades: [40, 50, 45] },
    { id: 5, name: "Kate", age: 21, grades: [75, 80, 70] },
  ];

  const passedStudents = getPassedStudents(students);
  const studentNames = getStudentNames(students);
  const foundStudent = findStudent(students, 3);
  const topStudent = getTopStudent(students);

  const summary = students.map((s) => ({
    id: s.id,
    name: s.name,
    average: Number(getStudentAverage(s).toFixed(2)),
    passed: getStudentAverage(s) >= 50,
  }));

  const lines = [
    `passed students (average >= 50): ${JSON.stringify(getStudentNames(passedStudents))}`,
    `student names: ${JSON.stringify(studentNames)}`,
    `findStudent(students, 3): ${JSON.stringify(foundStudent)}`,
    `top student: ${topStudent.name} (average ${getStudentAverage(topStudent).toFixed(2)})`,
    `summary [{id, name, average, passed}]: ${JSON.stringify(summary)}`,
    `original students (unchanged): ${JSON.stringify(students)}`,
  ];

  const notes = [
    "<strong>Insight:</strong> every helper (map/filter/find/reduce) returns new data, so the original students array never picks up an average or passed field.",
  ];

  render("output-final", "explain-final", lines, notes);
}
